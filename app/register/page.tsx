"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormRootError,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Must be valid email"),
});

export default function RegisterPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    });

    const submitForm = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            throw new Error();
            console.log(data);
        } catch (error) {
            form.setError("root", {
                message: "Form failed to submit",
            });
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(submitForm)}
                className="space-y-8 p-8"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name: </FormLabel>
                            <FormControl>
                                <Input placeholder="Cester Lhan" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email: </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="l33tSW3@gmail.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your email.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Music Genre" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="blues">Blues</SelectItem>
                        <SelectItem value="rock">Rock</SelectItem>
                        <SelectItem value="lofi">Lofi</SelectItem>
                    </SelectContent>
                </Select>
                <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Loading" : "Submit"}
                </Button>
                <FormRootError />
            </form>
        </Form>
    );
}
