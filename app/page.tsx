import { db } from "@/db";

export default async function Page() {
  const expenseItems = await db.expenseItem.findMany();

  const renderedExpenseItems = expenseItems.map((expenseItem) => {
    return <div key={expenseItem.id}>{expenseItem.item}</div>
  })

  return <div>{renderedExpenseItems}</div>;
}
