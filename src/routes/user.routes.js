import { Router } from "express";
import { authRequired } from "../middlewares/validateToken";
import { rolRequired } from "../middlewares/validateRol";

const router = Router()

router.get('/usuarios/:rol',getOperarios)