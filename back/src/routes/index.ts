import { Router } from 'express';
// const { Router } = require('express');
const router: Router = Router();


// router.get('/',(req: Request,res: Response) => res.send('Bienvenido al backend de este precioso proyecto!'));
router.use('/client', require('./client'));
router.use('/invoice', require('./invoice'));
router.use('/product', require('./product'));
router.use('/detail', require('./detail'));


module.exports = router;
