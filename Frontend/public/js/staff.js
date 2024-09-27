
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.crud-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            links.forEach(l => l.classList.remove('crud-active'));
            link.classList.add('crud-active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var links1 = document.querySelectorAll('.crud-link');
    var sections = document.querySelectorAll('.chart1');

    links1.forEach(link1 => {
        link1.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = 'flex';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});


