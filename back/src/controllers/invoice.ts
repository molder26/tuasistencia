import { Request, Response } from "express";
const { Invoice, Detail, Product, Client } = require("../db");

exports.getAll = async (req: Request, res: Response) => {
    try {
        const invoice = await Invoice.findAll({ order: [["date", "ASC"]] });
        return res.json(invoice);
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
        const invoice = await Invoice.findByPk(id);
        if (invoice) return res.json(invoice);

        return res.status(404).json({
            msg: "No se encuentra la factura " + id,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: error,
        });
    }
};

exports.postId = async (req: Request, res: Response) => {
    const { amount, date, clientId, items } = req.body;
    try {
        const newInvoice = await Invoice.create({ amount, date });
        await newInvoice.setClient(clientId);

        items.forEach(async (i: any) => {
            const newDetail = await Detail.create({
                quantity: i.quantity,
                price: i.price,
            });

            await newDetail.setProduct(i.id);
            await newDetail.setInvoice(newInvoice.id);

            const product = await Product.findByPk(i.id);
            await product.update({
                stock: product.stock - i.quantity,
            });
        });

        return res.json(newInvoice);
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
