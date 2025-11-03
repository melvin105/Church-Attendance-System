// Line Chart - Attendance (6 Weeks)
const ctx1 = document.getElementById('attendanceChart').getContext('2d');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [{
      label: 'Attendance',
      data: [500, 650, 600, 700, 550, 675],
      borderColor: '#2563eb',
      backgroundColor: 'rgba(37, 99, 235, 0.1)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});

// Doughnut Chart - Last Sunday’s Attendance
const ctx2 = document.getElementById('lastSundayChart').getContext('2d');
new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Present', 'Absent'],
    datasets: [{
      data: [75, 25],
      backgroundColor: ['#2563eb', '#e5e7eb']
    }]
  },
  options: {
    cutout: '70%',
    plugins: { legend: { display: false } }
  }
});
