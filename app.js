// Set launch date (adjust as needed)
const launchDate = new Date("2024-06-10"); // Replace with your desired launch date

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function getTimeRemaining(endTime) {
  const total = Date.parse(endTime) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  // Improved formatting for single digit values
  return {
    days: days.toString().padStart(2, '0'),
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0'),
  };
}

function updateTimer() {
  const timeRemaining = getTimeRemaining(launchDate);
  daysElement.textContent = timeRemaining.days;
  hoursElement.textContent = timeRemaining.hours;
  minutesElement.textContent = timeRemaining.minutes;
  secondsElement.textContent = timeRemaining.seconds;
}

// Update timer every second
setInterval(updateTimer, 1000);

// Initial update on page load
updateTimer();
