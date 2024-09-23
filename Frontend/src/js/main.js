
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.feature');
    var charts = document.querySelectorAll('.chart');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            charts.forEach(chart => {
                if (chart.id === targetId) {
                    chart.style.display = 'grid';
                } else {
                    chart.style.display = 'none';
                }
            });
        });
    });
});


