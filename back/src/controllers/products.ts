import { Request, Response } from "express";
const { Product } = require("../db");

exports.getAll = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({ order: [["id", "ASC"]] });
        return res.json(products);
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
        const product = await Product.findByPk(id);
        if (product) return res.json(product);

        return res.status(404).json({
            msg: "No se encuentra el producto " + id,
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
        const newProduct = new Product(body);
        await newProduct.save();

        return res.json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error,
        });
    }
};

exports.putId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const updatedProduct = await Product.findByPk(id);
        if (!updatedProduct)
            return res
                .status(404)
                .json({ msg: "No se encontro el producto " + id });

        updatedProduct.name = name;
        await updatedProduct.save();

        return res.json(updatedProduct);
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
        const product = await Product.findByPk(id);
        if (!product)
            return res.status(404).json({
                msg: "No se encuentra el Product " + id,
            });

        let date = new Date();
        product.deletedAt = date;
        await product.save();
        return res.json(product);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: error,
        });
    }
};
