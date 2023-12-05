"use client"; // This is a client component
import React from 'react';

type Student = {
  id: number;
  name: string;
  cg: number;
};

type StudentListProps = {
  students: Student[];
  onUpdate: (id: number, updatedStudent: Student) => void;
  onDelete: (id: number) => void;
};

const StudentList: React.FC<StudentListProps> = ({ students, onUpdate, onDelete }) => (
  <ul>
    {students.map((student) => (
      <li key={student.id}>
        {`ID: ${student.id}, Name: ${student.name}, CGPA: ${student.cg}`}{' '}
      </li>
    ))}
  </ul>
);

export default StudentList;
