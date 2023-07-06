import Image from "next/image";
import { Container } from "./Container";
import { features } from "@/lib/constants/features";

export function Features() {
  return (
    <div id="features" className="px-6 py-10 mt-8 lg:px-14">
      <h2 className="text-4xl font-bold tracking-tight text-center">
        Oferujemy coś dla każdego
      </h2>

      <Container className="mt-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md h-[275px]"
            >
              <Image src={feature.src} alt={feature.alt} fill />
              <div className="absolute inset-0 flex items-center justify-center bg-lime-700/70">
                <h5 className="text-xl font-bold tracking-tight text-center text-gray-100">
                  {feature.alt}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
