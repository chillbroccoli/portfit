import Image from "next/image";
import { IconCircleCheck } from "@tabler/icons-react";

import { cn } from "@/lib/cn";
import section1 from "@/assets/images/section-1.jpg";
import section2 from "@/assets/images/section-2.jpg";
import section3 from "@/assets/images/section-3.jpg";

import { Badge } from "./Badge";

const sections = [
  {
    title: "Trening siłowy",
    headline:
      "Zbuduj swoją siłę i sylwetkę z naszym profesjonalnym treningiem siłowym!",
    features: [
      "Indywidualnie dostosowany program treningowy",
      "Sprzęt najwyższej jakości",
      "Szkolenie z doświadczonymi instruktorami",
    ],
    imgSrc: section1,
  },
  {
    title: "Trening personalny",
    headline:
      "Osiągnij swoje cele dzięki naszym profesjonalnym treningom personalnym!",
    features: [
      "Spersonalizowane podejście",
      "Motywacja i wsparcie",
      "Analiza postępu",
    ],
    imgSrc: section2,
  },
  {
    title: "Wydarzenia tylko dla członków",
    headline:
      "Dołącz do naszej społeczności i ciesz się ekskluzywnymi wydarzeniami tylko dla członków!",
    features: [
      "Wydarzenia tematyczne",
      "Konkursy i turnieje",
      "Rabaty i promocje",
    ],
    imgSrc: section3,
  },
];

export function Sections() {
  return (
    <div className="py-12 mt-12 space-y-32 px-14">
      {sections.map((section, index) => (
        <div key={index} className="grid grid-cols-2 gap-8">
          <div
            className={cn(
              "flex flex-col items-start",
              index % 2 == 1 ? "order-last" : ""
            )}
          >
            <Badge>{section.title}</Badge>
            <h3 className="mt-8 text-4xl font-bold tracking-tight">
              {section.headline}
            </h3>
            <ul className="mt-6">
              {section.features.map((feature, index) => (
                <li key={index} className="flex items-center mt-4 space-x-2">
                  <IconCircleCheck size={24} className="text-lime-500" />
                  <p className="text-lg font-light">{feature}</p>
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
