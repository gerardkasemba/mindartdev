"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

// local imports
import { signin } from "@/apis/firebase";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";

interface CustomError {
    error: any;
}

const SignIn = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, seterror] = useState("");

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmail("");
        setPassword("");
        const res = await signin(email, password);
        if ((res as CustomError).error) {
            seterror("Error Signing in");

            setTimeout(() => {
                seterror("");
            }, 4000);
        } else {
            router.push("/dashboard/contact");
        }
    };

    return (
        <main className="flex justify-center items-center h-screen relative">
            <div className="absolute top-[2rem] right-[2rem]">
                <ThemeToggle />
            </div>
            <div className="bg-accent p-[2rem] rounded-md w-[80%] md:w-[30%]">
                {error.length > 0 && (
                    <div className="error w-full p-[1rem] text-center bg-red-500 text-white">
                        {error}
                    </div>
                )}
                <div className="title text-center text-secondary uppercase font-bold text-[2rem]">
                    SignIn
                </div>
                <form
                    onSubmit={(e) => handleSignIn(e)}
                    className="form-control mt-[2rem]"
                >
                    <div className="control flex flex-col gap-2">
                        <Label htmlFor="email" className="text-[1.2rem]">
                            E-mail
                        </Label>
                        <Input
                            className="border-[1px] border-slate-200 dark:border-slate-200/30 rounded-md "
                            type="email"
                            name=""
                            id="email"
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="control flex flex-col gap-2 mt-[2rem]">
                        <Label htmlFor="password" className="text-[1.2rem]">
                            Password
                        </Label>
                        <Input
                            className="border-[1px] border-slate-200 dark:border-slate-200/30 rounded-md "
                            type="password"
                            name=""
                            id="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="cta mt-[2rem] text-center">
                        <Button className="bg-secondary hover:bg-secondary/80 rounded-full text-white cursor-pointer">
                            Sign In
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default SignIn;
