import { Student } from "./student";


export interface Enroll {
    enrollID: number
    studentId: number
    status: string
    student: Student
}