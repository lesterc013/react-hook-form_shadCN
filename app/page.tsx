import { db } from "@/db";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default async function Page() {
    const expenseItems = await db.expenseItem.findMany();

    const renderedExpenseItems = expenseItems.map((expenseItem) => {
        return <div key={expenseItem.id}>{expenseItem.item}</div>;
    });

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    What was this tutorial about?
                </AccordionTrigger>
                <AccordionContent>
                    Foundations of useForm + zod and shadCN
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>What is your dream career?</AccordionTrigger>
                <AccordionContent>
                    To be a software engineer that develops for public good
                    instead of profit
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger>
                    Will you be able to achieve your goals?
                </AccordionTrigger>
                <AccordionContent>Of course</AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
