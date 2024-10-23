export const Table = ({ children }: { children: React.ReactNode }) => (
	<table className="min-w-full divide-y divide-gray-700 mt-4">{children}</table>
);

export const TableHeader = ({ children }: { children: React.ReactNode }) => {
	return (
		<thead>
			<tr>{children}</tr>
		</thead>
	);
};

export const TableBody = ({
	children,
	hasBorder = false,
}: { children: React.ReactNode; hasBorder?: boolean }) => {
	const className = hasBorder
		? "border border-gray-700"
		: "divide-y divide-gray-800";

	return <tbody className={className}>{children}</tbody>;
};

export const TableRow = ({ children }: { children: React.ReactNode }) => {
	return <tr>{children}</tr>;
};

export const TableCell = ({
	children,
	isHeader = false,
}: {
	children: React.ReactNode;
	isHeader?: boolean;
	isDescription?: boolean;
}) => {
	const className = isHeader
		? "px-1 py-4 text-left text-sm font-semibold text-white"
		: "whitespace-nowrap px-1 py-4 text-sm text-gray-300";

	return isHeader ? (
		<th className={className}>{children}</th>
	) : (
		<td className={className}>{children}</td>
	);
};
