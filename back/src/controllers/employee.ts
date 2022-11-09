import { Request, Response } from "express";
import { Op } from "sequelize";
const { Employee, Log } = require("../db");

exports.getAll = async (req: Request, res: Response) => {
	try {
		const employees = await Employee.findAll({
			order: [["name", "ASC"]],
			where: {
				deletedAt: {
					[Op.eq]: null,
				},
			},
		});
		return res.json(employees);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			msg: error,
		});
	}
};

exports.getAllWithLastLog = async (req: Request, res: Response) => {
	try {
		const employees = await Employee.findAll({
			order: [["name", "ASC"]],
			where: {
				deletedAt: {
					[Op.eq]: null,
				},
			},
			include: {
				model: Log,
				order: [["createdAt", "DESC"]],
				// attributes: [],
				limit: 1,
			},
		});
		return res.json(employees);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			msg: error,
		});
	}
};

exports.getById = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const employee = await Employee.findByPk(id);
		if (employee) return res.json(employee);

		return res.status(404).json({
			msg: "No se encuentra el empleado " + id,
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
	try {
		const newEmployee = new Employee(body);
		await newEmployee.save();

		return res.json(newEmployee);
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
