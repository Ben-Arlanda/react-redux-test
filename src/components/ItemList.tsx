import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchItems, selectItem } from "../features/items/itemSlice";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./table";
import { Button } from "@headlessui/react";

const ItemList = () => {
	const dispatch = useAppDispatch();
	const { items, selectedItem } = useAppSelector((state) => state.items);

	useEffect(() => {
		dispatch(fetchItems()); // Fetch items when the component mounts
	}, [dispatch]);

	const handleClick = (item) => {
		dispatch(selectedItem(item));
	};

	return (
		<div>
			<Table>
				<TableHeader>
					<TableCell isHeader>GUID</TableCell>
					<TableCell isHeader>Name</TableCell>
					<TableCell isHeader>Path</TableCell>
					<TableCell isHeader>Action</TableCell>
				</TableHeader>
				<TableBody>
					{items.map((item) => (
						<TableRow key={item.guid}>
							<TableCell>{item.guid}</TableCell>
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.path}</TableCell>
							<TableCell>
								<Button
									className="font-bold text-xs text-indigo-500 mr-4 hover:text-indigo-300"
									onClick={() => handleClick(item)}
								>
									View
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default ItemList;
