import { Router } from "express";
// const { Router } = require('express');

// const { auth } = require("express-openid-connect");
const router = Router();

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: "a long, randomly-generated string stored in env",
//   baseURL: "http://localhost:3000",
//   clientID: "VGZlpJ0VxghEUK7QpuCQigwk35IQD11I",
//   issuerBaseURL: "https://dev-o8v6r4c361nuu7wl.us.auth0.com",
// };

// auth router attaches /login, /logout, and /callback routes to the baseURL
// router.use(auth(config));

// req.isAuthenticated is provided from the auth router
// router.get("/", (req, res) => {
//   res.send(req.isAuthenticated() ? "Logged in" : "Logged out");
// });

// router.get('/',(req: Request,res: Response) => res.send('Bienvenido al backend de este precioso proyecto!'));
router.use("/employee", require("./employee"));
router.use("/log", require("./log"));

module.exports = router;
