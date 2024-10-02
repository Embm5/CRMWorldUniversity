import { Enroll } from "./enroll";
import { Course } from "./course";

export interface EnrollCourse {
    studentId: Enroll['studentId'];
    courses: Course['courseId'][];
}