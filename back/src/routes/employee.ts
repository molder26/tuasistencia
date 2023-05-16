import { Router } from "express";
// const { Router } = require('express');
const router = Router();
const {
    getAll,
    getAllWithLastLog,
    getById,
    postId,
    putId,
    deleteId,
    // getIdUser,
} = require("../controllers/employee");

router.get("/", getAll);
// router.get("/:idUser", getIdUser);
router.get("/wlogs/:id", getAllWithLastLog);
router.get("/:id", getById);
router.post("/", postId);
router.put("/:id", putId);
router.delete("/:id", deleteId);

//exportar el router para poder usarlo en el index.js
module.exports = router;
