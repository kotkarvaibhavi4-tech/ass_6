import { useState } from "react";

function StudentForm({ onSubmit }) {

    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const [department, setDepartment] = useState("");
    const [marks, setMarks] = useState("");

    function handleSubmit(event) {
    
        event.preventDefault();


        const student = {
            name: name,
            roll: roll,
            department: department,
            marks: marks
        };

        onSubmit(student);
    }

    return (
        <div className="form-container">

            <h2>Student Information Form</h2>

            <form onSubmit={handleSubmit}>

                <label>Student Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter student name"
                />

                <label>Roll Number:</label>
                <input
                    type="text"
                    value={roll}
                    onChange={(e) => setRoll(e.target.value)}
                    placeholder="Enter roll number"
                />

                <label>Department:</label>
                <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                >
                    <option value="">Select Department</option>
                    <option value="Information Technology">
                        Information Technology
                    </option>
                    <option value="Computer Engineering">
                        Computer Engineering
                    </option>
                    <option value="Mechanical Engineering">
                        Mechanical Engineering
                    </option>
                    <option value="Civil Engineering">
                        Civil Engineering
                    </option>
                </select>

                <label>Marks:</label>
                <input
                    type="number"
                    value={marks}
                    onChange={(e) => setMarks(e.target.value)}
                    placeholder="Enter marks"
                />

                <button type="submit">Submit</button>

            </form>

        </div>
    );
}

export default StudentForm;