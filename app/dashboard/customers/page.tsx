import CustomersTable from "@/app/ui/customers/table";
import { TableRowSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Customer",
};

export default async function Page() {
	return (
		<Suspense fallback={<TableRowSkeleton />}>
			<CustomersTable customers={[]} />
		</Suspense>
	);
}
