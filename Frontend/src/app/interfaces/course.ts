import { Teacher } from "./teacher";
import { Assignment } from "./assginment";
export interface Course {
    courseId: number;
    teacherId: number;
    asId: number;
    teacher: Teacher;
    assignment: Assignment;
}