"use client";

import { createClient } from "@/utils/supabase/client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface Session {
  user?: {
    name?: string;
    email?: string;
    image?: string;
    user_metadata?: {
      avatar_url?: string;
      full_name?: string;
    };
  };
}

export function UserMenu() {
  const pathname = usePathname();
  const supabase = createClient();

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-4"
    >
      {session ? (
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="size-6 rounded-none cursor-pointer">
                <AvatarImage
                  src={session.user?.user_metadata?.avatar_url}
                  className="rounded-none"
                />
                <AvatarFallback>
                  {session.user?.user_metadata?.full_name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-32"
              side="bottom"
              sideOffset={8}
            >
              {/* <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem> */}
              {/* <DropdownMenuItem asChild>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem> */}
              <DropdownMenuItem onClick={handleSignOut}>
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Link href={`/login?next=${pathname}`}>
          <Button
            variant="outline"
            className="bg-white text-black h-8 rounded-full"
          >
            Sign In
          </Button>
        </Link>
      )}
    </motion.div>
  );
}
