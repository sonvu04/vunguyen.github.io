const ctx = document.getElementById('skillChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'React', 'AWS'],
        datasets: [{
            label: 'Skill Proficiency (%)',
            data: [90, 85, 80, 75, 70],
            backgroundColor: ['#004AAD', '#0085FF', '#A8D5FF', '#FF7F50', '#FFE4B5']
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});
