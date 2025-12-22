import multiSport from "@/assets/cards/multisport.webp";
import fitProfit from "@/assets/cards/fitprofit.webp";
import medicover from "@/assets/cards/medicover.png";
import pzu from "@/assets/cards/pzu.png";
import Image from "next/image";

const imgs = [multiSport, fitProfit, medicover, pzu];

export function Cards() {
  return (
    <div className="">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-center text-gray-100">
          Obsługujemy karty
        </h2>
        <div className="grid items-center max-w-xl grid-cols-3 mx-auto mt-4 gap-x-4 gap-y-10 sm:grid-cols-6 lg:grid-cols-4">
          {imgs.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt=""
              width={158}
              height={72}
              className="col-span-2 max-h-14 lg:max-h-16 lg:col-span-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
