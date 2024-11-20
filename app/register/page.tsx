"use client";

import { db } from "@/db";
import { useForm, SubmitHandler } from "react-hook-form"; // SubmitHandler is to check whether what is submitted is of same type as the FormValues type
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { error } from "console";

// Dont need this if got zod
// type FormValues = {
//     name: string;
//     email: string;
//     password: string;
// };

const schema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Must be valid email"),
});

export default function RegisterPage() {
    // useForm will return many stuff but these are the essential ones; register to register an input into rhf; handleSubmit which will validate inputs before invoking the submit action (submitForm in this case)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm({
        resolver: zodResolver(schema),
    });

    const submitForm = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            throw new Error();
        } catch (error) {
            setError("root", {
                message: "Form failed to submit",
            });
        }
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <label htmlFor="name">Name: </label>
                <input {...register("name")} />
                {errors.name && typeof errors.name.message === "string" && (
                    <div>{errors.name.message}</div>
                )}
                <br />

                <label htmlFor="email">Email: </label>
                <input {...register("email")} />
                {errors.email && typeof errors.email.message === "string" && (
                    <div>{errors.email.message}</div>
                )}
                <br />

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Loading" : "Submit"}
                </button>
                {errors.root && typeof errors.root.message === "string" && (
                    <div>{errors.root.message}</div>
                )}
            </form>
        </>
    );
}
