import { redirect } from 'next/navigation';
import { db } from '../../../db';

export default function CreateExpenseItemPage() {
  async function createExpenseItem(formData: FormData) {
    'use server';

    const item = formData.get('item') as string;
    const description = formData.get('description') as string;

    const expenseItem = await db.expenseItem.create({
      data: {
        item,
        description,
      },
    });
    console.log(expenseItem);

    redirect('/');
  }

  return (
    <form action={createExpenseItem}>
      <h3>Create an Expense Item</h3>
      <div>
        <div>
          <label htmlFor="item">
            Item:
          </label>
          <input
            name="item"
            id="item"
          />
        </div>

        <div>
          <label htmlFor="description">
            Description:
          </label>
          <textarea
            name="description"
            id="description"
          />
        </div>

        <button type="submit">
          Create Expense Item
        </button>
      </div>
    </form>
  );
}
