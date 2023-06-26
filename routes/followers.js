import express from "express";
import { getFollowers } from "../controllers/follower.js";

const router = express.Router();

router.get("/", getFollowers)


export default router;