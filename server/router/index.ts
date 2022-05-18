import express from "express";
import items from "./items";

const router = express.Router();

router.use("/api", items);

export default router;
