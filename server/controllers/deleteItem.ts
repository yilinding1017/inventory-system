import { Request, Response } from "express";
import { Item } from "../models/Item";
import moment from "moment";

export default async (req: Request, res: Response) => {
	const _id = req.body.id;
	const comment = req.body.comment || "";

	if (!_id) {
		res.status(400).send("Item id is not provided");
		return;
	}

	let itemExists: boolean;
	try {
		itemExists = await Item.exists({ _id });
	} catch (e) {
		res.status(404).send({ message: "Item not found" });
	}

	const item = await Item.findOne({ _id });
	if (item.isDeleted) {
		res.status(400).send({ message: "Item already deleted" });
		return;
	}

	await Item.findOneAndUpdate(
		{ _id },
		{
			isDeleted: true,
			deletionComment: comment,
			updatedOn: moment().format("LLL"),
		}
	);
	res.status(200).send({ message: "Deleted" });
};
