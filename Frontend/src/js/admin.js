const course = document.querySelector('#course_a');
const qualifications = document.querySelector('#qualifications_a');
const attendance = document.querySelector('#attendance_a');

course.addEventListener('click', () => {
    window.location.href = '/course';
});

qualifications.addEventListener('click', () => {
    window.location.href = '/qualifications';
});

attendance.addEventListener('click', () => {
    window.location.href = '/attendance';
});
