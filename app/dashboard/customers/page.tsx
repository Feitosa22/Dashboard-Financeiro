import { Metadata } from 'next';
import Table from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from "@/app/lib/data";
import { Suspense } from "react";
 
export const metadata: Metadata = {
  title: 'Clientes',
};


export default async function Page({ 
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const customers = await fetchFilteredCustomers(query);
  return(
    <>
    <Suspense key={customers[0].email} >
        <Table customers={customers}/>
      </Suspense>
    </>
  )
}
