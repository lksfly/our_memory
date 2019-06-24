import express from "express";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import { join, login, logout } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.join, join);

export default globalRouter;
