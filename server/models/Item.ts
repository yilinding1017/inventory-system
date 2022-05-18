import mongoose from "mongoose";
import db from "../db.config";
import moment from "moment";

const instance = db.instance;

export interface IItem {
	title: string;
	inStock?: number;
	deletionComment?: string;
	isDeleted?: boolean;
	createdOn?: string;
	updatedOn?: string;
}

export type ItemDocument = mongoose.Document & IItem;

const itemSchema = new instance.Schema({
	title: { type: String, required: [true, "Item title is required"] },
	inStock: { type: Number, default: 0 },
	deletionComment: { type: String, default: "" },
	isDeleted: { type: Boolean, default: false },
	createdOn: { type: String, default: moment().format("LLL") },
	updatedOn: { type: String, default: moment().format("LLL") },
});

export const Item = instance.model<ItemDocument>("Item", itemSchema);
