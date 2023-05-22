import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

export function ChargedScanned() {
	Swal.fire({
		position: 'top-center',
		icon: 'success',
		title: 'Entrada Ingresada',
		showConfirmButton: false,
		timer: 1500
	})
}

export function CancelScanned() {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'No has Ingresado, Ojo!',
	})
}

export default function QrScanner() {
	let { employeeId, stateId } = useParams();
	const [searchParams] = useSearchParams();
	const [ipCliente, setIp] = useState(undefined);

	const ipServer = searchParams.get("ip");
	// const ipCliente = await axios.get("https://api.ipify.org/?format=json");

	useEffect(() => {
		async function getIp() {
			const ipify = await axios.get("https://api.ipify.org/?format=json");
			setIp(ipify.data.ip);
		}
		getIp();
	}, []);

	if (ipCliente === undefined) return <div>Cargando...</div>;
	return (
		<div>
			{employeeId} - {ipCliente} - {ipServer} -{" "}
			{ipCliente === ipServer ? ChargedScanned() : CancelScanned()}
		</div>
	);
}