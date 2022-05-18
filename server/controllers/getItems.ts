import { Request, Response } from "express";
import { Item } from "../models/Item";

export default async (req: Request, res: Response) => {
	const items = await Item.find();
	res.status(201).send({ items });
};
