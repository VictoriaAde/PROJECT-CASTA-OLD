"use client";
import { useState } from "react";
import { LoginWindow } from "@/components/login-window";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import "./globals.css";
import { Separator } from "@/components/ui/separator";
import { useFarcasterIdentity } from "../../utils/use-farcaster-identity";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [open, setOpen] = useState(false);

  const { farcasterUser, loading, startFarcasterSignerProcess, logout } =
    useFarcasterIdentity();

  return (
    <div className="flex flex-col min-h-screen w-full sm:px-0 px-3 justify-center items-center gap-6 mb-6">
      <Dialog open={open} onOpenChange={setOpen}>
        <Separator className="sm:w-[500px] w-sm" />
        <DialogTrigger asChild>
          <Button
            className="sm:w-[1000px] w-full mt-4"
            color="white"
            variant="outline"
          >
            Plus
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] max-w-[375px]">
          {farcasterUser?.status === "approved" ? (
            <p>You can now see NFTs</p>
          ) : (
            <LoginWindow
              farcasterUser={farcasterUser}
              loading={loading}
              startFarcasterSignerProcess={startFarcasterSignerProcess}
              logout={logout}
            ></LoginWindow>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
