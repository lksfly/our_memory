import express from "express";
import routes from "../routes";
import { edit, password, users } from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get(routes.editProfile, edit);
userRouter.get(routes.changePassword, password);

export default userRouter;
