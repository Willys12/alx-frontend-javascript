const getStudentsByLocation = (students) => {
    if (!Array.isArray(students)) {
        return [];
    }

    const studentsSanFrancisco = students.filter(student => student.location === 'San Francisco');
    return studentsSanFrancisco;
}

export default getStudentsByLocation;