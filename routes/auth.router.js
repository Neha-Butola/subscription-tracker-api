import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => res.send("SignUp User"));

authRouter.post("/sign-in", (req,res) => res.send("SignIn LoggedIn"))

authRouter.post("/sign-Out", (req, res) => res.send("User Signed Out"))

export default authRouter