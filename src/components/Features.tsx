import cardio from "@/assets/images/cardio.jpg";
import power from "@/assets/images/fitness-power.jpg";
import groupTraining from "@/assets/images/group-training.jpg";
import healthyFood from "@/assets/images/healthy-food.jpg";
import Image from "next/image";
import { Container } from "./Container";

const imgs = [
  { src: cardio, alt: "Ćwiczenia Kardio" },
  { src: power, alt: "Fitness Power" },
  { src: groupTraining, alt: "Ćwiczenia grupowe" },
  { src: healthyFood, alt: "Gabinet prawidłowego odżywiania" },
];

export function Features() {
  return (
    <div id="features" className="px-6 py-10 mt-8 lg:px-14">
      <h2 className="text-4xl font-bold tracking-tight text-center">
        Oferujemy coś dla każdego
      </h2>

      <Container className="mt-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {imgs.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md h-[275px]"
            >
              <Image src={img.src} alt={img.alt} fill />
              <div className="absolute inset-0 flex items-center justify-center bg-lime-700/70">
                <h5 className="text-xl font-bold tracking-tight text-center text-gray-100">
                  {img.alt}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
