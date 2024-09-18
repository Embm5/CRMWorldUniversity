// import { Course } from '../models/course.model.js'
// import { Enroll } from '../models/enroll.model.js'
// import { EnrollCourse } from '../models/enrollcourse.model.js'
// import { Student } from '../models/student.model.js'
// import { Person } from '../models/person.model.js'

export class EnrollCourseController {
  // getAllEnrollments = async (req, res) => {
  //   try {
  //     const enrollments = await EnrollCourse.findAll({
  //       include: [
  //         { model: Course },
  //         {
  //           model: Enroll,
  //           include: [
  //             {
  //               model: Student,
  //               include: [{ model: Person }]
  //             }
  //           ]
  //         }
  //       ]
  //     })
  //     res.status(200).json(enrollments)
  //   } catch (error) {
  //     return res.status(500).json({ message: error.message })
  //   }
  // }

  // createEnrollCourse = async (req, res) => {
  //   try {
  //     const { enrollId, courseId } = req.body
  //     const newEnrollCourse = await EnrollCourse.create({ where: { enrollId, courseId } })
  //     if (newEnrollCourse){

  //     })
  //   } catch (error) {
  //     return res.status(500).json({ message: error.message })
  //   }
  // }
}
