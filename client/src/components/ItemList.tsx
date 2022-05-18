import { Item } from "../models/Item";
import { List, Input, Button } from "antd";
import { useEffect, useState } from "react";

interface ItemList {
	selectedItem: Item | null;
	deleted?: boolean;
	setSelectedItem: React.Dispatch<React.SetStateAction<Item | null>>;
	items: Item[];
	deleteItem: (id: string, comment: string) => Promise<void>;
	undeleteComment: (id: string) => Promise<void>;
	editItem: (id: string, title: string, count: number) => Promise<void>;
}

function ItemList({
	selectedItem,
	deleted = false,
	setSelectedItem,
	items,
	deleteItem,
	undeleteComment,
	editItem,
}: ItemList) {
	const [count, setCount] = useState(0);
	const [comment, setComment] = useState("");
	const [title, setTitle] = useState("");

	useEffect(() => {
		setComment("");
	}, [selectedItem]);

	return (
		<div>
			<List
				header={deleted ? "Deleted" : "Available"}
				style={{ paddingLeft: 6 }}
				dataSource={items}
				renderItem={(item) => (
					<List.Item
						key={item._id}
						actions={[
							item.isDeleted ? (
								<div
									onClick={() => {
										undeleteComment(item._id);
									}}
									style={{ cursor: "pointer" }}
								>
									Undelete
								</div>
							) : (
								<Input.Group compact size="small">
									<Input
										style={{ width: 200 }}
										defaultValue={comment}
										onChange={(e) => setComment(e.target.value)}
									/>
									<Button
										size="small"
										onClick={() => {
											deleteItem(item._id, comment);
											setComment("");
										}}
										type="primary"
									>
										Delete
									</Button>
								</Input.Group>
							),
							item.isDeleted ? null : (
								<div
									onClick={() => {
										if (selectedItem?._id !== item._id) {
											setTitle(item.title);
											setCount(item.inStock);
											setSelectedItem(item);
										} else {
											editItem(item._id, title, count);
										}
									}}
									style={{ cursor: "pointer" }}
								>
									{item._id === selectedItem?._id ? "Confirm edit" : "Edit"}
								</div>
							),
							item._id === selectedItem?._id && (
								<div
									onClick={() => setSelectedItem(null)}
									style={{ cursor: "pointer" }}
								>
									Cancel
								</div>
							),
						]}
					>
						<span>
							{selectedItem?._id === item._id ? (
								<>
									<Input
										size="small"
										addonBefore="Product title:"
										onChange={(e) => setTitle(e.target.value)}
										defaultValue={item.title}
										allowClear
										style={{ marginBottom: 3 }}
									></Input>
									<Input
										size="small"
										addonBefore="In stock:"
										type="number"
										onChange={(e) => setCount(parseInt(e.target.value))}
										defaultValue={item.inStock}
									></Input>
								</>
							) : (
								item.title
							)}
							{item._id !== selectedItem?._id
								? `, in stock: ${item.inStock}`
								: ""}
							{item.isDeleted &&
								` , deletion comment: ${item.deletionComment || "no comment"}`}
						</span>
					</List.Item>
				)}
			></List>
		</div>
	);
}

export default ItemList;
