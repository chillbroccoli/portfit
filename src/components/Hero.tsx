import { IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

import { Container } from "./Container";
import { Logo } from "./Logo";
import { Avatar } from "./Avatar";

const navigation = [
  { name: "Strona Główna", href: "#home" },
  { name: "Oferta Klubu", href: "#features" },
  { name: "Nasz Cennik", href: "#membership" },
  { name: "O nas", href: "#about" },
  {
    name: "Strefa Klienta",
    href: "https://portfit-elblag.cms.efitness.com.pl/",
  },
];

export function Hero() {
  return (
    <div
      id="home"
      className="bg-hero h-[90vh] flex flex-col bg-center bg-no-repeat object-cover"
    >
      <div className="p-2 border-b border-gray-600/40">
        <Container className="flex items-center justify-between font-light text-gray-200">
          <p>Robotnicza 236, 82-300 Elbląg</p>
          <a href="tel:506-166-760">Tel: 506-166-760</a>
        </Container>
      </div>
      <div className="p-2">
        <Container className="flex items-center justify-between">
          <Logo />
          <ul className="flex items-center gap-x-5">
            {navigation.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-gray-200">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <div className="flex flex-col items-center justify-center grow">
        <div className="w-3/4 mx-auto text-center">
          <h1 className="font-bold tracking-tighter text-7xl text-lime-500">
            Osiągnij swoje najlepsze ja!
          </h1>
          <p className="w-3/4 mx-auto mt-8 font-light leading-7 tracking-tight text-gray-200">
            Stawiamy na jakość, innowację i postępy. Oferujemy szeroki wybór
            zajęć fitness, treningów siłowych i indywidualnego doradztwa
            treningowego, aby pomóc Ci osiągnąć swoje cele i poczuć się
            doskonale we własnej skórze.
          </p>
        </div>

        <div className="flex items-center mt-16 space-x-4">
          <div className="flex items-center">
            <IconStarFilled size={24} className="text-lime-500" />
            <IconStarFilled size={24} className="text-lime-500" />
            <IconStarFilled size={24} className="text-lime-500" />
            <IconStarFilled size={24} className="text-lime-500" />
            <IconStarHalfFilled size={24} className="text-lime-500" />
          </div>
          <p className="text-lg font-semibold">
            na <span className="text-lime-500">84</span> recenzji Google
          </p>
        </div>

        <div className="flex items-center justify-center mt-6 space-x-4">
          <Avatar src="https://lh3.googleusercontent.com/a-/AD_cMMRFEKOqPgHAcaNRXJpSg343A11PRRE7Te0W4UDae5bnGg=w60-h60-p-rp-mo-br100" />
          <p className="w-1/2 text-lg font-light tracking-tight text-gray-200">
            &ldquo;Elegancko. Sporo uczęszczających ale nie brakuje sprzętu.
            Bardzo miła obsługa. osobne salki treningowe. dla mnie ideolo.
            Polecam i pozdrawiam!&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
