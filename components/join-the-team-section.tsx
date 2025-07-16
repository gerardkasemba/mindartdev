"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useRef, useState } from "react";
import { CustomUploadFormHandle, FileUpload } from "./ui/file-upload";
import { bytesToMB } from "@/lib/utils";
import { jobApply, uploadCV } from "@/apis/firebase";
import { UploadResult } from "firebase/storage";

const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({ message: "Invalid email address." }),
    position: z.string().min(2, {
        message: "position must be at least 2 characters.",
    }),
});

const JoinTheTeamSection = () => {
    const uploadRef = useRef<CustomUploadFormHandle>(null);
    const [files, setFiles] = useState<File>();
    const handleFileUpload = (files: File) => {
        setFiles(files);
        console.log(files);
    };
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            position: "",
        },
    });
    async function onSubmit(data: z.infer<typeof FormSchema>) {
        if (!files) return toast.error("Please upload your CV.");
        if (bytesToMB(files?.size) > 5)
            return toast.error("File size must be less than 5MB.");
        try {
            const res = await uploadCV(
                `${files?.name}-${files?.size}-${new Date().getMilliseconds()}`,
                files as Blob
            );
            const path = (res as UploadResult).ref.fullPath;
            await jobApply(path, data.name, data.email, data.position);
            toast.success(
                "Application sent successfully, we'll be in touch soon."
            );
            form.reset();
            setFiles(undefined);
            handleClear();
        } catch (error) {
            toast.error("Something went wrong, please try again.");
            console.log(error);
        }
    }

    const handleClear = () => {
        uploadRef.current?.clear();
        console.log("handle clear");
    };

    return (
        <section className="py-12 px-5 md:px-10">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="phone" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="w-full min-h-96 border border-dashed bg-white dark:bg-black/30 border-neutral-200 dark:border-neutral-800 rounded-lg">
                        <FileUpload
                            onChange={handleFileUpload}
                            ref={uploadRef}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="cursor-pointer bg-secondary text-white hover:bg-secondary/80 rounded-full"
                    >
                        Submit
                    </Button>
                    <Button
                        variant={"outline"}
                        className="cursor-pointer rounded-full ml-5 hover:text-black dark:hover:text-white"
                        onClick={() => {
                            form.reset();
                            setFiles(undefined);
                            handleClear();
                        }}
                    >
                        Clear
                    </Button>
                </form>
            </Form>
        </section>
    );
};

export default JoinTheTeamSection;
