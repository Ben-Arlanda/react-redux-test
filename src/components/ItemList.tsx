import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchItems, selectItem } from "../features/items/itemSlice";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./table";

const ItemList = () => {
	const dispatch = useAppDispatch();
	const { items } = useAppSelector((state) => state.items);

	useEffect(() => {
		dispatch(fetchItems()); // Fetch items when the component mounts
	}, [dispatch]);

	return (
		<div>
			<Table>
				<TableHeader>
					<TableCell isHeader>GUID</TableCell>
					<TableCell isHeader>Name</TableCell>
					<TableCell isHeader>Path</TableCell>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell>
							<h1>Test</h1>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
};

export default ItemList;
