import { Router } from "express";
import { registrar,login,logout,profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import {rolRequired} from "../middlewares/validateRol.js";

const router = Router()

router.post('/registrar',registrar)

router.post('/login',login)

router.post('/logout',logout)

router.get('/profile',authRequired, rolRequired('Administrador'),profile)






export default router