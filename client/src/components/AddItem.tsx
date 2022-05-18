import { Button, Input } from "antd";

interface AddItemProps {
	title: string;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
	createItem: () => Promise<void>;
}

function AddItem({
	title,
	setTitle,
	count,
	setCount,
	createItem,
}: AddItemProps) {
	return (
		<div style={{ marginTop: 12 }}>
			<div style={{ marginBottom: 12 }}>Add your product here</div>
			<Input
				size="small"
				addonBefore="Title:"
				onChange={(e) => setTitle(e.target.value)}
				defaultValue={title}
				allowClear
				style={{ marginBottom: 12 }}
			></Input>
			<Input
				size="small"
				addonBefore="In stock:"
				type="number"
				onChange={(e) => setCount(parseInt(e.target.value))}
				defaultValue={count}
				style={{ marginBottom: 12 }}
			></Input>
			<Button type="primary" onClick={createItem}>
				Add
			</Button>
		</div>
	);
}

export default AddItem;
