const course = document.querySelector('#course');
const qualifications = document.querySelector('#qualifications');
const attendance = document.querySelector('#attendance_record');
const schedule = document.querySelector('#download_schedule');
const enrollment = document.querySelector('#enrollment');

course.addEventListener('click', () => {
    window.location.href = '/course';
});

qualifications.addEventListener('click', () => {
    window.location.href = '/qualifications';
});

attendance.addEventListener('click', () => {
    window.location.href = '/attendance';
});

schedule.addEventListener('click', () => {
    window.location.href = '/schedule';
});

enrollment.addEventListener('click', () => {
    window.location.href = '/enrollment';
});
