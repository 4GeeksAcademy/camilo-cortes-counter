import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Contador = (props) => {
	return (
		<div className="container text-center my-5">
			<div className="row justify-content-center">
				<div className="card col-2 d-flex mx-1 justify-content-center align-items-center">
					<span className="card-title m-3">
						<i className="bi bi-stopwatch" style={{ fontSize: '30px', color: '#007bff' }}></i> {/* Icono centrado y ajustado */}
					</span>
				</div>
				<div className="card col-1 d-flex mx-1 justify-content-center align-items-center">
					<span className="card-title m-3">{props.n6}</span>
				</div>
				<div className="card col-1 d-flex mx-1 justify-content-center align-items-center">
					<span className="card-title m-3">{props.n5}</span>
				</div>
				<div className="card col-1 d-flex mx-1 justify-content-center align-items-center">
					<span className="card-title m-3">{props.n4}</span>
				</div>
				<div className="card col-1 d-flex mx-1 justify-content-center align-items-center">
					<span className="card-title m-3">{props.n3}</span>
				</div>
				<div className="card col-1 d-flex mx-1 justify-content-center align-items-center">
					<span className="card-title m-3">{props.n2}</span>
				</div>
				<div className="card col-1 d-flex mx-1 justify-content-center align-items-center">
					<span className="card-title m-3">{props.n1}</span>
				</div>
			</div>
		</div>
	);
};

export default Contador;
