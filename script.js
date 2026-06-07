let totalSeconds = 0;
let remainingSeconds = 0;
let isRunning = false;
let timerInterval = null;
let selectedPreset = null;

// DOM elements
const timeDisplay = document.getElementById('timeDisplay');
const modeLabel = document.getElementById('modeLabel');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const progressFill = document.getElementById('progressFill');
const timerDisplay = document.querySelector('.timer-display');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

// Initialize preset buttons
document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => selectPreset(btn));
});

// Format time display
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Select preset
function selectPreset(btn) {
    // Remove active class from all buttons
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
    
    // Add active class to clicked button
    btn.classList.add('active');
    
    // Get preset data
    const time = parseInt(btn.dataset.time);
    const name = btn.dataset.name;
    
    selectedPreset = { time, name };
    totalSeconds = time;
    remainingSeconds = time;
    
    // Update display
    timeDisplay.textContent = formatTime(time);
    modeLabel.textContent = `${name} ⏱️`;
    updateProgressBar();
    
    // Update inputs
    minutesInput.value = Math.floor(time / 60);
    secondsInput.value = time % 60;
    
    // Reset timer state
    if (isRunning) {
        pauseTimer();
    }
}

// Set custom time
function setCustomTime() {
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    
    if (minutes === 0 && seconds === 0) {
        alert('请设置有效的时间！');
        return;
    }
    
    totalSeconds = minutes * 60 + seconds;
    remainingSeconds = totalSeconds;
    selectedPreset = null;
    
    // Update display
    timeDisplay.textContent = formatTime(totalSeconds);
    modeLabel.textContent = `自定义: ${minutes}分${seconds}秒 ⏱️`;
    updateProgressBar();
    
    // Remove active state from preset buttons
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
    
    // Reset timer state
    if (isRunning) {
        pauseTimer();
    }
}

// Start timer
function startTimer() {
    if (totalSeconds === 0) {
        alert('请先选择或设置时间！');
        return;
    }
    
    if (isRunning) return;
    
    isRunning = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    timeDisplay.classList.add('running');
    
    timerInterval = setInterval(() => {
        remainingSeconds--;
        timeDisplay.textContent = formatTime(remainingSeconds);
        updateProgressBar();
        
        if (remainingSeconds <= 0) {
            completeTimer();
        }
    }, 1000);
}

// Pause timer
function pauseTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    timeDisplay.classList.remove('running');
}

// Reset timer
function resetTimer() {
    pauseTimer();
    
    if (selectedPreset) {
        remainingSeconds = selectedPreset.time;
        timeDisplay.textContent = formatTime(selectedPreset.time);
    } else if (totalSeconds > 0) {
        remainingSeconds = totalSeconds;
        timeDisplay.textContent = formatTime(totalSeconds);
    } else {
        remainingSeconds = 0;
        timeDisplay.textContent = '00:00';
    }
    
    updateProgressBar();
    timerDisplay.classList.remove('complete');
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

// Complete timer
function completeTimer() {
    pauseTimer();
    timerDisplay.classList.add('complete');
    
    // Play notification sound
    playNotificationSound();
    
    // Show alert
    showCompletionNotification();
}

// Update progress bar
function updateProgressBar() {
    if (totalSeconds === 0) {
        progressFill.style.width = '0%';
        return;
    }
    
    const progress = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
    progressFill.style.width = progress + '%';
}

// Play notification sound using Web Audio API
function playNotificationSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Create oscillator
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        // Connect nodes
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Set parameters for a pleasant notification sound
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        // Fade in and out
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        // Play sound
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
        
    } catch (e) {
        console.log('无法播放声音: ', e);
    }
}

// Show completion notification
function showCompletionNotification() {
    const message = modeLabel.textContent.replace(' ⏱️', '');
    
    // Try to use Notification API if available
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('☕ 咖啡计时器', {
            body: `${message} - 咖啡准备好了！`,
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">☕</text></svg>'
        });
    } else {
        // Fallback: simple alert
        alert(`⏰ 完成！\n${message}\n咖啡准备好了！`);
    }
}

// Request notification permission on load
if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}

// Initialize
window.addEventListener('load', () => {
    timeDisplay.textContent = '00:00';
    pauseBtn.disabled = true;
});
