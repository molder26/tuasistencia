import { Router } from "express";
// const { Router } = require('express');
const router = Router();
const {
    getAll,
    getById,
    postId,
    putId,
    deleteId,
} = require("../controllers/client");

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", postId);
router.put("/:id", putId);
router.delete("/:id", deleteId);

//exportar el router para poder usarlo en el index.js
module.exports = router;
