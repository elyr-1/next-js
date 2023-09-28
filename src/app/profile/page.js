"use client";
import SuspenseFallback from "@/components/SuspenseFallback";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const { data } = useSession({
    required: true,
  });
  if (!data) {
    return <SuspenseFallback />;
  }
  return <div>profile</div>;
}
