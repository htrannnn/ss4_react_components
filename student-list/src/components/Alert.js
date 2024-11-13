import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

class Alert extends React.Component {
	render() {
		return (
			<>
				<div className="alert alert-warning" role="alert">
					Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại
				</div>
			</>
		);
	}
}
export default Alert;
