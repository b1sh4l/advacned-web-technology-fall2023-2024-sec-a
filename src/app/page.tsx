"use client"; // This is a client component
import { useState } from 'react';
import StudentList from './components/studenList';
import AddStudentForm from './components/addStudentForm';

type Student = {
  id: number;
  name: string;
  cg: number;
};

const Home: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [deleteId, setDeleteId] = useState<number>(0);
  const [updateId, setUpdateId] = useState<number>(0);
  const [updateName, setUpdateName] = useState<string>('');
  const [updateCg, setUpdateCg] = useState<number>(0);

  const handleCreate = (newStudent: Student) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const handleUpdate = () => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === updateId ? { ...student, name: updateName, cg: updateCg } : student
      )
    );

    setUpdateId(0);
    setUpdateName('');
    setUpdateCg(0);
  };

  const handleDelete = () => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== deleteId));
    setDeleteId(0); 
  };

  return (
    <div>
      <h1>Student Information</h1>
      <StudentList students={students} onUpdate={handleUpdate} onDelete={handleDelete} />
      <AddStudentForm onCreate={handleCreate} />
      
      <div>
      <br/>

      <label htmlFor="updateId">ID: </label>
        <input
          type="number"
          id="updateId"
          value={updateId}
          onChange={(e) => setUpdateId(parseInt(e.target.value))}
        />

        <label htmlFor="updateName">Name: </label>
        <input
          type="text"
          id="updateName"
          value={updateName}
          onChange={(e) => setUpdateName(e.target.value)}
        />

        <label htmlFor="updateCg">CGPA: </label>
        <input
          type="number"
          id="updateCg"
          value={updateCg}
          onChange={(e) => setUpdateCg(parseFloat(e.target.value))}
        />

        <button onClick={handleUpdate}>Update</button>

        <br/>
        <br/>


        <label htmlFor="deleteId">Enter ID to Delete: </label>
        <input
          type="number"
          id="deleteId"
          value={deleteId}
          onChange={(e) => setDeleteId(parseInt(e.target.value))}
        />
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Home;