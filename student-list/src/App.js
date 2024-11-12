import logo from "./logo.svg";
import "./App.css";
import React from "react";
import StudentList from "./components/StudentList";

const studentList = [
	{
		id: 1,
		name: "Nguyễn Văn A",
		age: 30,
		address: "Hà Nội",
	},
	{
		id: 2,
		name: "Trần Thị C",
		age: 25,
		address: "Hà Nội",
	},
];

function App() {
	return (
		<>
			<StudentList list={studentList} />
		</>
	);
}

export default App;
