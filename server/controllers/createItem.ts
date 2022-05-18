import { Request, Response } from "express";
import { Item } from "../models/Item";

export default async (req: Request, res: Response) => {
	const title = req.body.title;
	const count = req.body.count;
	if (!title) {
		res.status(400).send("Title is not provided");
		return;
	}
	const item = await new Item({ title, inStock: count || 0 }).save();
	res.status(201).send({ item: item });
};
