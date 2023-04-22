import { DialogTitle } from "@mui/material";
import { Dialog } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../app/hooks";
import { fetchAllEmployees } from "../../store/slices/employee/employeeSlice";
import axios from "axios";

function BtnPresentismo({ employee }) {
	const dispatch = useAppDispatch();
	const [open, setOpen] = useState(false);
	let oldState = employee.logs[0] ?? false;

	const URL = import.meta.env.VITE_FRONT_URL;

	const [state, setState] = useState(!oldState.isIn);
	const [ip, setIp] = useState(undefined);

	useEffect(() => {
		setState(!oldState.isIn);
	}, [oldState]);

	useEffect(() => {
		async function getIp() {
			const ipify = await axios.get("https://api.ipify.org/?format=json");
			setIp(ipify.data.ip);
		}
		getIp();
	}, []);

	const handleClickOpen = () => {
		setOpen(true);
		// connectSocket();
	};

	const handleClose = () => {
		dispatch(fetchAllEmployees());
		setOpen(false);
	};

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
				<IconButton
					aria-label="close"
					onClick={handleClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
				<DialogTitle>Marcar {state ? "Entrada" : "Salida"}</DialogTitle>
				<DialogContent>
					<p>{`${employee.name} DNI ${employee.dni}`}</p>
					<QRCode
						// value={`https://tuasistencia.ar/qr/${state ? 0 : 1}/${
						value={`${URL}/qr/${state ? 0 : 1}/${
							employee.dni
						}?ip=${ip}`}
					/>
				</DialogContent>
			</Dialog>
			{/* <div>
				<p>Connected: {"" + isConnected}</p>
			</div> */}
		</>
	);
}

export default BtnPresentismo;
