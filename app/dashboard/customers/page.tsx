import { Metadata } from 'next';
import Table from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from "@/app/lib/data";
 
export const metadata: Metadata = {
  title: 'Clientes',
};


export default async function Page({ searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const customers = await fetchFilteredCustomers();
  return(
    <>
    <Table customers={customers}/>
    </>
  )
}
