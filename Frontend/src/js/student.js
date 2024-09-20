const course = document.querySelector('#course');
const qualifications = document.querySelector('#qualifications');
const attendance = document.querySelector('#attendance_record');
const schedule = document.querySelector('#download_schedule');
const enrollment = document.querySelector('#enrollment');

course.addEventListener('click', () => {
    window.location.href = '/Frontend/src/views/student/course.html';
});

qualifications.addEventListener('click', () => {
    window.location.href = '/Frontend/src/views/student/qualifications.html';
});

attendance.addEventListener('click', () => {
    window.location.href = '/Frontend/src/views/student/attendance.html';
});

schedule.addEventListener('click', () => {
    window.location.href = '/Frontend/src/views/student/schedule.html';
});

enrollment.addEventListener('click', () => {
    window.location.href = '/Frontend/src/views/student/enrollment.html';
});
