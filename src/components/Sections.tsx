import Image from "next/image";
import { IconCircleCheck } from "@tabler/icons-react";

import { cn } from "@/lib/cn";

import { Badge } from "./Badge";
import { sections } from "@/lib/constants/sections";

export function Sections() {
  return (
    <div className="px-6 py-12 mt-2 space-y-12 lg:mt-12 lg:space-y-32 lg:px-14">
      {sections.map((section, index) => (
        <div key={index} className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div
            className={cn(
              "flex flex-col items-start",
              index % 2 == 1 ? "lg:order-last" : ""
            )}
          >
            <Badge>{section.title}</Badge>
            <h3 className="mt-8 text-4xl font-bold tracking-tight">
              {section.headline}
            </h3>
            <ul className="mt-6">
              {section.features.map((feature, index) => (
                <li key={index} className="flex items-center mt-4 space-x-2">
                  <div>
                    <IconCircleCheck className="w-6 h-6 text-lime-500" />
                  </div>
                  <span className="text-lg font-light">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-md shadow-lg shadow-lime-600/20">
            <Image src={section.imgSrc} alt="" />
            <div className="absolute inset-0 bg-lime-700/20"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
