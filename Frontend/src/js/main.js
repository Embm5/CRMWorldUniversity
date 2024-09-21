

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.feature');
    const charts = document.querySelectorAll('.chart');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            charts.forEach(chart => {
                if (chart.id === targetId) {
                    chart.classList.add('active');
                } else {
                    chart.classList.remove('active');
                }
            });
        });
    });
});
