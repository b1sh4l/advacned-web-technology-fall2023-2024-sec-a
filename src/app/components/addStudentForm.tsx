"use client"; // This is a client component
import React, { useState } from 'react';

type Student = {
  id: number;
  name: string;
  cg: number;
};

type AddStudentFormProps = {
  onCreate: (newStudent: Student) => void;
};

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onCreate }) => {
  const [newStudent, setNewStudent] = useState<Student>({ id: 0, name: '', cg: 0 });

  const handleCreate = () => {
    if (newStudent.cg >= 0 && newStudent.cg <= 4) {
      onCreate(newStudent);
      setNewStudent({ id: 0, name: '', cg: 0 });
    } else {
      alert('CG value must be between 0 and 4');
    }
  };

  return (
    <div>
      <h2>Add New Student</h2>
      <label htmlFor="newStudent">ID: </label>
      <input
        type="number"
        placeholder="ID"
        value={newStudent.id}
        onChange={(e) => setNewStudent({ ...newStudent, id: parseInt(e.target.value) })}
      />
      <label htmlFor="newStudent">Name: </label>
      <input
        type="text"
        placeholder="Name"
        value={newStudent.name}
        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
      />
      <label htmlFor="newStudent">CGPA: </label>
      <input
        type="number"
        placeholder="CG"
        value={newStudent.cg}
        onChange={(e) => setNewStudent({ ...newStudent, cg: parseFloat(e.target.value) })}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default AddStudentForm;