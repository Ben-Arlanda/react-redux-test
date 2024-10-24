import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const ItemDetails = ({ item }) => {
	const imageUrl = `http://localhost:8080/image/${item.guid}`;

	return (
		<div
			className="flex border border-gray-600 bg-white/5 rounded-lg mt-8 px-2 w-2/3 max-w-2xl
    "
		>
			<TabGroup>
				<TabList className="flex space-x-4 mt-3">
					<Tab
						className={({ selected }) =>
							selected ? "text-indigo-500 font-bold" : "text-white"
						}
					>
						Properties
					</Tab>
					<Tab
						className={({ selected }) =>
							selected ? "text-indigo-500 font-bold" : "text-white"
						}
					>
						Image
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<div className="py-4 text-white text-sm">
							{Object.entries(item.properties).map(([key, value]) => (
								<p key={key}>
									{key}: {value}
								</p>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<img
							src={imageUrl}
							alt={`${item.name} image`}
							className="w-64 h-64 rounded-md my-3"
						/>
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</div>
	);
};

export default ItemDetails;
