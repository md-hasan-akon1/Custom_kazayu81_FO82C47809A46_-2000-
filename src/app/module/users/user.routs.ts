import { Router } from "express";
import { userController } from "./user.controller";

const router=Router()
router.get("/user",userController.createUser)


export const UserRoutes=router