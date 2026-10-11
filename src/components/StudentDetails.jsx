function StudentDetails({ student }) {
    if (!student) {
        return (
            <div className="details-container">
                <h2>Student Details</h2>
                <p>No student information submitted yet.</p>
            </div>
        );
    }

    return (
        <div className="details-container">
            <h2>Student Details</h2>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Roll Number:</strong> {student.roll}</p>
            <p><strong>Department:</strong> {student.department}</p>
            <p><strong>Marks:</strong> {student.marks}</p>
        </div>
    );
}

export default StudentDetails;