import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Item } from "./models/Item";
import { BASE_URL } from "./constants";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";

function App() {
	const [selectedItem, setSelectedItem] = useState<Item | null>(null);
	const [items, setItems] = useState<Item[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const [title, setTitle] = useState("");
	const [count, setCount] = useState(0);

	const fetchItem = async () => {
		const res = await axios.get(`${BASE_URL}/api/getItems`);
		setItems(res.data.items);
		setIsLoading(false);
	};

	const deleteItem = async (id: string, comment: string) => {
		await axios.put(`${BASE_URL}/api/deleteItem`, { id, comment });
		const indexOfDeletedItem = items.findIndex((item) => item._id === id);
		if (indexOfDeletedItem !== -1) {
			const itemCopy = [...items];
			itemCopy[indexOfDeletedItem].isDeleted = true;
			itemCopy[indexOfDeletedItem].deletionComment = comment;
			setItems(itemCopy);
			setSelectedItem(null);
		}
	};

	const undeleteComment = async (id: string) => {
		await axios.put(`${BASE_URL}/api/undeletItem`, { id });
		const indexOfDeletedItem = items.findIndex((item) => item._id === id);
		if (indexOfDeletedItem !== -1) {
			const itemCopy = [...items];
			itemCopy[indexOfDeletedItem].isDeleted = false;
			itemCopy[indexOfDeletedItem].deletionComment = "";
			setItems(itemCopy);
			setSelectedItem(null);
		}
	};

	const editItem = async (id: string, title: string, count: number) => {
		await axios.put(`${BASE_URL}/api/editItem`, { id, title, count });
		const indexOfDeletedItem = items.findIndex((item) => item._id === id);
		if (indexOfDeletedItem !== -1) {
			const itemCopy = [...items];
			itemCopy[indexOfDeletedItem].title = title;
			itemCopy[indexOfDeletedItem].inStock = count;
			setItems(itemCopy);
			setSelectedItem(null);
		}
	};

	const createItem = async () => {
		const res = await axios.post(`${BASE_URL}/api/createItem`, {
			title,
			count,
		});
		const item = res.data.item;
		setItems([...items, item]);
	};

	useEffect(() => {
		fetchItem();
	}, []);

	if (isLoading) {
		return null;
	}
	return (
		<div className="App">
			<AddItem
				title={title}
				count={count}
				setTitle={setTitle}
				setCount={setCount}
				createItem={createItem}
			></AddItem>
			<ItemList
				selectedItem={selectedItem}
				setSelectedItem={setSelectedItem}
				items={items.filter((item) => !item.isDeleted)}
				deleteItem={deleteItem}
				undeleteComment={undeleteComment}
				editItem={editItem}
			></ItemList>
			<ItemList
				selectedItem={selectedItem}
				setSelectedItem={setSelectedItem}
				items={items.filter((item) => item.isDeleted)}
				deleteItem={deleteItem}
				undeleteComment={undeleteComment}
				editItem={editItem}
				deleted
			></ItemList>
		</div>
	);
}

export default App;
