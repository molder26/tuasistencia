import { Router } from "express";
// const { Router } = require('express');
const router = Router();
const {
    // getById,
    postId,
    // putId,
    // deleteId,
} = require("../controllers/user");

// router.get("/:id", getById);
router.post("/", postId);
// router.put("/:id", putId);
// router.delete("/:id", deleteId);

//exportar el router para poder usarlo en el index.js
module.exports = router;