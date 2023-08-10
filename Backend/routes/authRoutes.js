import express from "express";
import {registerController, loginController,testController} from '../controllers/authController.js'
import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();

//Routing
//REGISTER || METHOD POST
router.post('/register', registerController)  // following MVC pattern

// LOGIN || METHOD POST
router.post('/login', loginController)

// test route
router.get('/test',requireSignIn, isAdmin, testController)

export default router;