
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sparkle, FolderPlus, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectDropdown = () => {
  const menuItems = [
    {
      icon: (
        <div className="relative mr-2">
          <Sparkle className="h-5 w-5 text-[#7b67d5]" />
          <div className="absolute top-0 -right-0 h-[6px] w-[6px] text-[#7b67d5]">
            <span className="absolute inset-0 rotate-0">
              <span className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 bg-current opacity-90"></span>
              <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current opacity-90"></span>
            </span>
          </div>
          <div className="absolute -bottom-0 -left-0 h-[4px] w-[4px] text-[#7b67d5]">
            <span className="absolute inset-0 rotate-0">
              <span className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 bg-current"></span>
              <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current"></span>
            </span>
          </div>
        </div>
      ),
      label: "Model with AI",
      onClick: () => console.log("Model with AI clicked"),
    },
    {
      icon: <FolderPlus className="mr-2 h-5 w-5 text-[#7b67d5]" />,
      label: "Add Existing Project",
      onClick: () => console.log("Add Existing Project clicked"),
    },
    {
      icon: (
        <div className="relative mr-2">
          <div className="relative w-5 h-5">
            {/* Base lightbulb shape */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[14px] h-[14px] border-[1.5px] border-[#7b67d5] rounded-full">
                <Check className="h-3 w-3 text-[#7b67d5] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[10px] h-[6px] border-[1.5px] border-[#7b67d5] rounded-sm"></div>
            </div>
            {/* Dots around the bulb */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-[3px] h-[3px] bg-[#7b67d5] rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 30}deg) translate(12px, -50%)`,
                  transformOrigin: '0 50%',
                }}
              ></div>
            ))}
          </div>
        </div>
      ),
      label: "Solutions Hub",
      onClick: () => console.log("Solutions Hub clicked"),
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 ease-in-out"
        >
          Create Project
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white rounded-lg shadow-lg p-1">
        {menuItems.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onClick={item.onClick}
            className={cn(
              "flex items-center px-3 py-2.5 text-sm cursor-pointer rounded-md",
              "hover:bg-[#9b87f5]/10 hover:text-[#9b87f5] transition-colors duration-200",
              "focus:bg-[#9b87f5]/10 focus:text-[#9b87f5]"
            )}
          >
            {item.icon}
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectDropdown;
