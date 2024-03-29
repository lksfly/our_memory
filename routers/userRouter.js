import express from "express";
import routes from "../routes";
import { editProfile, changePassword } from "../controller/userController";

const userRouter = express.Router();

//userRouter.get("/", users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
