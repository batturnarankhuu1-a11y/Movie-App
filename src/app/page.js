"use client";

import Image from "next/image";
import * as React from "react";
import { Button } from "@base-ui/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  const [position, setPosition] = React.useState("bottom");
  return (
    <div className="flex justify-between items-center">
      <div className="w-15 h-15 m-5">
        <img src="./images.jpeg"></img>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div className="flex justify-center items-center border-2 border-black w-24.25 h-9 rounded-[10px] font-mono">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline">Genre</Button>}
            />
            <DropdownMenuContent className="w-144.25 h-83.25">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="font-bold text-black text-[28px] font-mono">
                  Genres
                </DropdownMenuLabel>
                <DropdownMenuLabel className="text-black text-[14px] font-mono">
                  See lists of movies by genre
                </DropdownMenuLabel>
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                ></DropdownMenuRadioGroup>
                <DropdownMenuItem>
                  <div></div>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <div>
            <img src="./_magnifying-glass.png"></img>
          </div>
          <input className="flex items-center w-94.75 h-9 border rounded-5" />
        </div>
      </div>
      <div></div>
    </div>
  );
}
