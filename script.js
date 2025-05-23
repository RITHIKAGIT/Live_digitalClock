function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  const dateString = now.toLocaleDateString('en-US', options);

  document.getElementById('clock').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

// Update every second
setInterval(updateClock, 1000);

// Initial call to show time immediately
updateClock();


