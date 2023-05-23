import { Request, Response } from "express";
import { Op } from "sequelize";
import nodemailer from "nodemailer";
require("dotenv").config();


const { Employee, Log, User } = require("../db");
const { USER_MAIL, TOKEN_GMAIL } = process.env;

const html = `
    <h1>Registro exitoso!! </h1>
    <h2>Bienvenido "pichulo"</h2>
    <h3>En este momento queda habilitado para Incorporar a sus empleados!!😁</h3>
	<h3>Tu Asistencia</h3>
`;

exports.getById = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const user = await User.findByPk(id);
		if (user) return res.json(user);

		return res.status(404).json({
			msg: "No se encuentra el usuario " + id,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			msg: error,
		});
	}
};

exports.postId = async (req: Request, res: Response) => {
	const { body } = req;
	console.log(body);
	try {
		const [user, created] = await User.findOrCreate({
			where: { idUser: body.idUser },
		});
		if (created) {
			//send nodemailer
			const transporter: any = nodemailer.createTransport({
				host: "smtp.gmail.com",
				port: 587,
				auth: {
					user: USER_MAIL,
					pass: TOKEN_GMAIL,
				},
			});
			transporter.sendMail({
				// remitente
				from: "tusasistencias@gmail.com",
				// mail a quien va dirigido
				to: "tusasistencias@gmail.com",
				// asunto
				subject: "Tu asistencia, te da la Bienvenida",
				html: html,
			});
			console.log("Enviado...");
		}

		return res.json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: error,
		});
	}
};

exports.putId = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { name, dni, address, phone } = req.body;
	try {
		const updatedEmployee = await Employee.findByPk(id);
		if (!updatedEmployee)
			return res
				.status(404)
				.json({ msg: "No se encontro el empleado " + id });

		updatedEmployee.name = name;
		updatedEmployee.dni = dni;
		updatedEmployee.address = address;
		updatedEmployee.phone = phone;
		await updatedEmployee.save();

		return res.json(updatedEmployee);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: error,
		});
	}
};

exports.deleteId = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const employee = await Employee.findByPk(id);
		if (!employee)
			return res.status(404).json({
				msg: "No se encuentra el empleado " + id,
			});

		let date = new Date();
		employee.deletedAt = date;
		await employee.save();
		return res.json(employee);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			msg: error,
		});
	}
};