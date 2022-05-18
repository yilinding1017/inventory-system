import express from "express";
import createItem from "../controllers/createItem";
import getItems from "../controllers/getItems";
import deleteItem from "../controllers/deleteItem";
import undeleteItem from "../controllers/undeleteItem";
import editItem from "../controllers/editItem";

const router = express.Router();

router.post("/createItem", createItem);
router.get("/getItems", getItems);
router.put("/deleteItem", deleteItem);
router.put("/undeletItem", undeleteItem);
router.put("/editItem", editItem);

export default router;
