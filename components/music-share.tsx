"use client";

import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "~/lib/utils";
import { Apple, Spotify, Line } from "react-bootstrap-icons";
import Link from "next/link";

const badgeVariants = cva(
  "inline-flex gap-x-3 items-center border rounded-full px-3.5 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
        secondary:
          "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
        destructive:
          "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type ShareUrl = {
  apple_share_url: string;
  spotify_share_url: string;
  line_share_url: string;
};

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants>,
    ShareUrl {}

function MusciShare({
  className,
  variant,
  apple_share_url,
  spotify_share_url,
  line_share_url,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      <Link href={apple_share_url} target="_blank" rel="noopener noreferrer">
        <Apple className="cursor-pointer text-xl text-slate-800" />
      </Link>
      <Link href={spotify_share_url} target="_blank" rel="noopener noreferrer">
        <Spotify className="cursor-pointer text-xl text-teal-600" />
      </Link>
      <Link href={line_share_url} target="_blank" rel="noopener noreferrer">
        <Line className="cursor-pointer text-xl text-green-600" />
      </Link>
    </div>
  );
}

export { MusciShare, badgeVariants };
