"suse client";

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

export default function Header() {
  const [position, setPosition] = React.useState("bottom");
  return (
    <div className="flex justify-between items-center">
      <div className="w-15 h-15 m-10">
        <img src="./images.jpeg"></img>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div className="flex justify-center items-center border-2 border-black w-24.25 h-9 rounded-[10px] font-mono">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline">Genre</Button>}
            />
            <DropdownMenuContent className="w-155 h-83.25">
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
                <div className="flex items-center gap-4 font-mono my-5">
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-21 h-5">
                    <div>Action</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-27.75 h-5">
                    <div>Adventure</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-27.5 h-5">
                    <div>Animation</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-24.35 h-5">
                    <div>Biography</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-21.75 h-5">
                    <div>Comedy</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                </div>
                <div className="flex items-center my-4 gap-5 font-mono">
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-19.25 h-5">
                    <div>Crime</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-32.25 h-5">
                    <div>Documentary</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-19 h-5">
                    <div>Drama</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-21 h-5">
                    <div>Family</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-23.25 h-5">
                    <div>Fantasy</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                </div>
                <div className="flex items-center gap-5 font-mono">
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-31.25 h-5">
                    <div>Film-Noir</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-32.25 h-5">
                    <div>Game-Show</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-24.25 h-5">
                    <div>History</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-24.25 h-5">
                    <div>Horror</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-24.25 h-5">
                    <div>Music</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                </div>
                <div className="flex items-center gap-5 my-5 font-mono">
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-24.25 h-5">
                    <div>Musical</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-24.25 h-5">
                    <div>Mystery</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-17.25 h-5">
                    <div>News</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-30.25 h-5">
                    <div>Reality-TV</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-25.25 h-5">
                    <div>Romance</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                </div>
                <div className="flex items-center font-mono my-5 gap-5">
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-44.25 h-5">
                    <div>Sci-Fi</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-38.25 h-5">
                    <div>Short</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-38.25 h-5">
                    <div>Sport</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-58.25 h-5">
                    <div>Talk-Show</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-52.25 h-5">
                    <div>Thriller</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-center items-center border border-black rounded-[10px] w-28.25 h-5">
                    <div>War</div>
                    <div>
                      <img src="./chevron-right.png"></img>
                    </div>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex justify-center items-center border-2 border-black rounded-[10px] w-100 h-100%">
          <div className="flex items-center mx-2">
            <img src="./_magnifying-glass.png"></img>
          </div>
          <input className="flex items-center w-94.75 h-100% border-none font-mono border-2 border-black" />
        </div>
      </div>
      <div className="flex justify-center items-center mr-10">
        <div className="flex justify-center items-center border-2 border-black w-9 h-9 rounded-[10px]">
          <img src="./moon.png"></img>
        </div>
      </div>
    </div>
  );
}
