import { Time } from "@angular/common";
import { Course } from "./course";
export interface CourseSchedule {
    courseData: {
        teacherId: number;
        asId: number;
    };
    scheduleData: {
        day: string;
        startTime: string;
        endTime: string;
        room: string;
    }[];
    course: Course;
}