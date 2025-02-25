
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BrainCircuit, FolderPlus, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectDropdown = () => {
  const menuItems = [
    {
      icon: <BrainCircuit className="mr-2 h-5 w-5" />,
      label: "Model with AI",
      onClick: () => console.log("Model with AI clicked"),
    },
    {
      icon: <FolderPlus className="mr-2 h-5 w-5" />,
      label: "Add Existing Project",
      onClick: () => console.log("Add Existing Project clicked"),
    },
    {
      icon: <Database className="mr-2 h-5 w-5" />,
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
