const schoolData = {
    name: "S.D Public School",
    classrooms: [
        {
            grade: '8th',
            teacher: 'Rekha Mittal',
            section: 'A',
            students: [
                {
                    id: 1,
                    name: "Bhavesh",
                    phoneNumber: "9416271468"
                },
                {
                    id: 2,
                    name: "singam",
                    phoneNumber: '7437858647'
                }
            ]
        },
        {
            grade: '10th',
            teacher: 'Sunil Dhiman',
            section: 'B',
            students: [
                {
                    name: "Chandra",
                    phoneNumber: "9416271468"
                },
                {
                    name: "Rakshit",
                    phoneNumber: '7437858647'
                }
            ]
        }
    ]
}

const classrooms = schoolData.classrooms
for(let  i = 0; i < classrooms.length; i++) {
    const classroom = classrooms[i]
    const students = classroom.students
    for(let j = 0; j < students.length; j++) {
        const student = students[j]
        console.log(student.name)
    }
}