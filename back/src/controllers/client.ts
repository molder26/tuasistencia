import { Request, Response } from "express";
const { Client } = require("../db");

exports.getAll = async (req: Request, res: Response) => {
    try {
        const clients = await Client.findAll({ order: [["name", "ASC"]] });
        return res.json(clients);
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
        const client = await Client.findByPk(id);
        if (client) return res.json(client);

        return res.status(404).json({
            msg: "No se encuentra el cliente " + id,
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
        const newClient = new Client(body);
        await newClient.save();

        return res.json(newClient);
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
        const updatedClient = await Client.findByPk(id);
        if (!updatedClient)
            return res
                .status(404)
                .json({ msg: "No se encontro el usuario " + id });

        updatedClient.name = name;
        await updatedClient.save();

        return res.json(updatedClient);
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
        const client = await Client.findByPk(id);
        if (!client)
            return res.status(404).json({
                msg: "No se encuentra el cliente " + id,
            });

        let date = new Date();
        client.deletedAt = date;
        await client.save();
        return res.json(client);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: error,
        });
    }
};
