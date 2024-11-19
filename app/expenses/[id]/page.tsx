// import { notFound } from 'next/navigation';
import { db } from '@/db';

type ExpenseShowPageProps = {
  params: {
    id: string;
  };
}

export default async function ExpensesShowPage(props: ExpenseShowPageProps) {
  const expenseItem = await db.expenseItem.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  // if (!expenseItem) {
  //   return notFound();
  // }

  return <>
    <h1>{expenseItem.item}</h1>
    <div>{expenseItem.description}</div>
  </>;
}
