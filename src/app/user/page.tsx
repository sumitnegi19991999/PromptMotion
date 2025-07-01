"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "sonner";

const User = () => {
  const [value, setValue] = useState("");
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("back job started");
      },
    })
  );
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <Button
          disabled={invoke.isPending}
          onClick={() => {
            invoke.mutate({ value });
          }}
        >
          Invoke backjob
        </Button>
      </section>
    </div>
  );
};

export default User;
