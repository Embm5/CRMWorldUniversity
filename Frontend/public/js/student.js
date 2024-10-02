const COURSE = document.querySelector('#course');
const QUALIFICATIONS = document.querySelector('#qualifications');
const ATTENDANCE = document.querySelector('#attendance_record');
const SCHEDULE = document.querySelector('#download_schedule');
const ENROLLMENT = document.querySelector('#enrollment');

COURSE.addEventListener('click', () => {
    window.location.href = '/Frontend/src/views/student/course.html';
});

QUALIFICATIONS.addEventListener('click', () => {
    window.location.href = '/Frontend/src/views/student/qualifications.html';
});

ATTENDANCE.addEventListener('click', () => {
    window.location.href = '/Frontend/src/views/student/attendance.html';
});

SCHEDULE.addEventListener('click', () => {
    window.location.href = '/Frontend/src/views/student/schedule.html';
});

ENROLLMENT.addEventListener('click', () => {
    window.location.href = '/Frontend/src/views/student/enrollment.html';
});
