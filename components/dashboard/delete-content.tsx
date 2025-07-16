"use client";
import {
    deleteContact,
    deleteJobDetails,
    deleteSchedule,
} from "@/apis/firebase";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Delete, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

type DeleteType = "contact" | "schedule" | "job";

export function DeleteContent({
    id,
    type,
    path,
}: {
    id: string;
    type: DeleteType;
    path?: string;
}) {
    const router = useRouter();
    const delType = type;

    const handleDelete = async () => {
        try {
            if (type === "contact") {
                await deleteContact(id);
            } else if (type === "schedule") {
                await deleteSchedule(id);
            } else if ((type = "job")) {
                await deleteJobDetails(id, path);
            }
            router.push(`/dashboard/${delType}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    className="text-red-500 hover:text-red-600 cursor-pointer"
                >
                    <Trash />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Confirm Delete</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this {delType}?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button onClick={handleDelete} variant={"destructive"}>
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
