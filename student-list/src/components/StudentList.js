import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

class StudentList extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		return (
			<>
				<table className="table table-striped table-danger">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Age</th>
							<th>Address</th>
						</tr>
					</thead>
					<tbody>
						{this.props.list.map((e, i) => (
							<tr key={e.id}>
								<td>{e.id}</td>
								<td>{e.name}</td>
								<td>{e.age}</td>
								<td>{e.address}</td>
							</tr>
						))}
					</tbody>
				</table>
			</>
		);
	}
}
export default StudentList;
