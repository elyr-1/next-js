"use client";

import LayoutMain from "@/app/(routes)/layout";
import SuspenseFallback from "@/components/SuspenseFallback";
import { Button } from "flowbite-react";
import { signOut, useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data } = useSession({
    required: true,
  });
  console.log(data);
  if (!data) {
    return <SuspenseFallback />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Button
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </Button>
    </div>
  );
}
