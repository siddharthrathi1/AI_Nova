
import React, { ElementType, ComponentProps } from "react";
import { XIcon } from "lucide-react";  // Example icon import for usage demonstration

import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  icon: ElementType<ComponentProps<typeof XIcon>>; // Assuming all icons have similar props
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: IconComponent, // Correctly renamed to avoid shadowing and indicate this is a component
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          <IconComponent className={cn("w-10 h-10", iconColor)} />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
