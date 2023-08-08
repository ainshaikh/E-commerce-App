import express from "express";
import registerController from '../controller/authController.js'

//router object
const router = express.Router();

//Routing
//REGISTER || METHOD POST
router.post('/register', registerController)  // following MVC pattern

export default router;