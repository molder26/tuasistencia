import { Request, Response } from "express";
const { Detail, Invoice, Product } = require("../db");

exports.getAll = async (req: Request, res: Response) => {
    try {
        const details = await Detail.findAll({
            include: [{ model: Invoice }, { model: Product }],
        });
        return res.json(details);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: error,
        });
    }
};

exports.getByInvoiceId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const invoice = await Invoice.findAll({
            include: [
                {
                    model: Invoice,
                    where: {
                        id: id,
                    },
                },
                { model: Product },
            ],
        });
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
    const { body } = req;
    try {
        console.log(body);
        const newDetail = new Detail(body);
        await newDetail.save();

        body.items.forEach(async (i:{}) => {
            try {
                console.log(i)
                // await newDetail.addProduct(i.id);
            } catch (error) {}
        });

        return res.json(newDetail);
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
