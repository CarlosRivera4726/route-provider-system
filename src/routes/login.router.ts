import { Router } from "express";
import cacheInit from "../middlewares/cache.config";
import loginController from "../controllers/login.controller";
import { verifyToken } from "../validators/jwt.config";

const controllerLogin=  new loginController()
const routerLogin = Router();
const path = "/api/v1";

routerLogin.post(`${path}/login`,verifyToken, async (req, res) => {
    await controllerLogin.loginUser(req, res);
});

routerLogin.post(`${path}/register`, async (req, res) => {
    await controllerLogin.registerUser(req, res);
});

routerLogin.post(`${path}/logout`, async (req, res) => {
    await controllerLogin.logout(req, res);
});


export default routerLogin