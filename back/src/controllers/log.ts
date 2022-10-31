import { Request, Response } from "express";
const { Log } = require("../db");

exports.getAll = async (req: Request, res: Response) => {
    try {
        const log = await Log.findAll({ order: [["createdAt", "ASC"]] });
        return res.json(log);
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
        const log = await Log.findByPk(id);
        if (log) return res.json(log);

        return res.status(404).json({
            msg: "No se encuentra el log " + id,
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
        const newLog = await Log.create( body );
        await newLog.setEmployee(body.employeeId);

        return res.json(newLog);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error,
        });
    }
};

// exports.putId = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const { name } = req.body;
//     try {
//         const updatedInvoice = await Invoice.findByPk(id);
//         if (!updatedInvoice)
//             return res
//                 .status(404)
//                 .json({ msg: "No se encontro la factura " + id });

//                 updatedInvoice.name = name;
//         await updatedInvoice.save();

//         return res.json(updatedInvoice);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             msg: error,
//         });
//     }
// };

// exports.deleteId = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     try {
//         const invoice = await Invoice.findByPk(id);
//         if (!invoice)
//             return res.status(404).json({
//                 msg: "No se encuentra la factura " + id,
//             });

//         let date = new Date();
//         invoice.deletedAt = date;
//         await invoice.save();
//         return res.json(invoice);
//     } catch (error) {
//         console.log(error);
//         res.status(400).json({
//             msg: error,
//         });
//     }
// };
