import Chart from 'https://cdn.jsdelivr.net/npm/chart.js';

const ctx = document.getElementById('progressChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Completed', 'Pending'],
    datasets: [{
      data: [60, 40],
      backgroundColor: ['#4CAF50', '#FFC107']
    }]
  },
  options: {
    responsive: true
  }
});
