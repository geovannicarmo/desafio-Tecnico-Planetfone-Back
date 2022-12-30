import { Router } from 'express';
import dataUserController from "../controllers/userController.js";

const userRouter = Router()
userRouter.get('/users', dataUserController)

export default userRouter