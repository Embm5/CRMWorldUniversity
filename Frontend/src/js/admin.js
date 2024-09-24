/* subjects */

// buttons
const CONSULT_S = document.querySelector('#subject-consult');
const SUBMIT_S = document.querySelector('#subject-submit');
const DELETE_S = document.querySelector('#subject-delete');

// inputs
const SUBJECT_ID = document.querySelector('#subject-id');
const SUBJECT_NAME = document.querySelector('#subject-name');
const SUBJECT_SEMESTER = document.querySelector('#subject-semester');

// array
let subjects = [];

// events
CONSULT_S.addEventListener('click', () => {
    console.log(subjects);
});

SUBMIT_S.addEventListener('click', (e) => {
    let newSubject = {
        id: SUBJECT_ID.value,
        name: SUBJECT_NAME.value,
        semester: SUBJECT_SEMESTER.value
    };
    subjects.push(newSubject);
});

DELETE_S.addEventListener('click', () => {
    for (const subject of subjects) {
        if (subject.id === SUBJECT_ID.value) {
            subjects.splice(subjects.indexOf(subject), 1);
        }
        console.log(subjects);
    }
});

/* users */

// buttons
const CONSULT_U = document.querySelector('#user-consult');
const SUBMIT_U = document.querySelector('#user-submit');
const DELETE_U = document.querySelector('#user-delete');

// inputs
const USER_ID = document.querySelector('#user-id');
const FIRST_NAME = document.querySelector('#first-name');
const SECOND_NAME = document.querySelector('#second-name');
const LAST_NAME1 = document.querySelector('#last-name1');
const LAST_NAME2 = document.querySelector('#last-name2');
const ROLE = document.querySelector('#role');

// array
let users = [];

// events
CONSULT_U.addEventListener('click', () => {
    console.log(users);
});

SUBMIT_U.addEventListener('click', (e) => {
    let newUser = {
        id: USER_ID.value,
        firstName: FIRST_NAME.value,
        secondName: SECOND_NAME.value,
        lastName1: LAST_NAME1.value,
        lastName2: LAST_NAME2.value,
        role: ROLE.value
    };
    users.push(newUser);
});

DELETE_U.addEventListener('click', () => {
    for (const user of users) {
        if (user.id === USER_ID.value) {
            users.splice(users.indexOf(user), 1);
        }
        console.log(users);
    }
});

/* courses */

// buttons
const CONSULT_C = document.querySelector('#course-consult');
const SUBMIT_C = document.querySelector('#course-submit');
const DELETE_C = document.querySelector('#course-delete');

// inputs
const SUBJECT_ID_C = document.querySelector('#c-subject-id');
const COURSE_ID = document.querySelector('#course-id');
const TEACHER_ID = document.querySelector('#teacher-id');
const DAY = document.querySelector('#day');
const START_TIME = document.querySelector('#start-time');
const END_TIME = document.querySelector('#end-time');
const CLASSROOM = document.querySelector('#classroom');
const SCHEDULE_ID = document.querySelector('#schedule-id');

// array
let courses = [];

// events
CONSULT_C.addEventListener('click', () => {
    console.log(courses);
});

SUBMIT_C.addEventListener('click', (e) => {
    let newCourse = {
        subjectId: SUBJECT_ID_C.value,
        courseId: COURSE_ID.value,
        teacherId: TEACHER_ID.value,
        day: DAY.value,
        startTime: START_TIME.value,
        endTime: END_TIME.value,
        classroom: CLASSROOM.value,
        scheduleId: SCHEDULE_ID.value
    };
    courses.push(newCourse);
});

DELETE_C.addEventListener('click', () => {
    for (const course of courses) {
        if (course.courseId === COURSE_ID.value) {
            courses.splice(courses.indexOf(course), 1);
        }
        console.log(courses);
    }
});
