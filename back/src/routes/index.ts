import { Router } from "express";
// const { Router } = require('express');

const router = Router();

// router.get('/',(req: Request,res: Response) => res.send('Bienvenido al backend de este precioso proyecto!'));
router.use("/employee", require("./employee"));
router.use("/log", require("./log"));
router.use("/user", require("./user"));

module.exports = router;
