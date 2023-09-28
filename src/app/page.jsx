"use client";
import LoginForm from "@/components/LoginForm";
import SuspenseFallback from "@/components/SuspenseFallback";
import { Button } from "flowbite-react";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import logo from "../../public/images/77logotext.png";
import { toast } from "react-toastify";

export default function Home() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const onLogin = async (form) => {
    setIsLoading(true);
    const res = await signIn("credentials", {
      ...form,
      redirect: false,
    });
    console.log(res);
    if (res?.error === "404") {
      toast.error("Incorrect Username or Password");
      setIsLoading(false);
    } else if (res?.error === "CredentialsSignin") {
      alert("Internal Server Error");
      setIsLoading(false);
    } else {
      router.push("/dashboard");
      toast.success("Login Successfully");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-stone-800 p-5">
      <div className="bg-slate-50 p-7 rounded-md max-w-full w-96">
        <div className="flex justify-center mb-3">
          <Image
            src={logo}
            width={300}
            height="auto"
            alt="Picture of the logo"
            priority
          />
        </div>
        <LoginForm isLoading={isLoading} onSubmit={onLogin} />
      </div>
      <p className="text-slate-100 mt-3 text-center text-xs font-light">
        © Seven Seven Corporate Group. All rights reserved.
      </p>
    </div>
  );
}
