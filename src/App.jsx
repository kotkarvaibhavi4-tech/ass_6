import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import "./App.css";

function App() {
    const [student, setStudent] = useState(null);

    function handleStudentSubmit(studentData) {
        setStudent(studentData);
    }

    return (
        <div className="app">
            <h1>Student Information Application</h1>

            <StudentForm onSubmit={handleStudentSubmit} />

            <StudentDetails student={student} />
        </div>
    );
}

export default App;