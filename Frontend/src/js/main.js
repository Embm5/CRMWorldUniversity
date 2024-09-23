
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.feature');
    var charts = document.querySelectorAll('.chart');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
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

document.addEventListener('DOMContentLoaded', function() {
    var links1 = document.querySelectorAll('.crud-link');

    links1.forEach(link1 => {
        link1.addEventListener('click', function(event) {
            event.preventDefault();
            
            links1.forEach(l => l.classList.remove('crud-active'));
            link1.classList.add('crud-active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var links2 = document.querySelectorAll('.crud-link');
    var charts1 = document.querySelectorAll('.chart1');

    links2.forEach(link2 => {
        link2.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            charts1.forEach(chart1 => {
                if (chart1.id === targetId) {
                    chart1.classList.add('active');
                } else {
                    chart1.classList.remove('active');
                }
            });
        });
    });
});


