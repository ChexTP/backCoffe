import { Router} from "express";
import {getOperarios,getOperarioById,updateOperario,deleteOperario} from "../controllers/user.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { rolRequired } from "../middlewares/validateRol.js";

const router = Router()

router.get('/operarios',authRequired, rolRequired('Operario'),getOperarios)
router.get("/operarios/:id",getOperarioById)
router.put("/operarios/:id",updateOperario)
router.delete("/operarios/:id",deleteOperario)

export default router