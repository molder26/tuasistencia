import { DialogTitle } from "@mui/material";
import { Dialog } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { io } from "socket.io-client";

const socket = io("localhost:3001");

function BtnPresentismo() {
	let [open, setOpen] = React.useState(false);

	let [state, setState] = React.useState(true);

	const handleClickOpen = () => {
		setOpen(true);
		setState(!state);
		// connectSocket();
	};

	const handleClose = () => {
		setOpen(false);
	};

	// const connectSocket = () => {
	// 	// client-side
	// 	socket.on("connect", () => {
	// 		console.log(socket.id); // x8WIv7-mJelg7on_ALbx
	// 	});

	// 	socket.on("disconnect", () => {
	// 		console.log(socket.id); // undefined
	// 	});
	// };

	const [isConnected, setIsConnected] = useState(socket.connected);

	useEffect(() => {
		socket.on("connect", () => {
			setIsConnected(true);
		});

		socket.on("disconnect", () => {
			setIsConnected(false);
		});

		return () => {
			socket.off("connect");
			socket.off("disconnect");
			socket.off("pong");
		};
	}, []);

	return (
		<>
			<Box>
				<Button
					style={{
						margin: "0 0 0 -8%",
						width: "25%",
						padding: "0 30px 0 30px",
						display: "flex",
						alignContent: "center",
						backgroundColor: state ? "" : "red",
					}}
					variant="contained"
					onClick={handleClickOpen}
				>
					{state ? "Ingreso" : "Egreso"}
				</Button>
			</Box>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>CARGA DE PRESENTISMO</DialogTitle>
				<br />
				<DialogContent>
					<QRCode value="Aca el valor que quieras dar" />
				</DialogContent>
			</Dialog>
			<div>
				<p>Connected: {"" + isConnected}</p>
			</div>
		</>
	);
}

export default BtnPresentismo;
