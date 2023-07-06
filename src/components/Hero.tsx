"use client";

import {
  IconStarFilled,
  IconStarHalfFilled,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { Disclosure } from "@headlessui/react";

import { cn } from "@/lib/cn";

import { Container } from "./Container";
import { Logo } from "./Logo";
import { Avatar } from "./Avatar";
import { Cards } from "./Cards";
import { navigation } from "@/lib/constants/navigation";

export function Hero() {
  return (
    <Disclosure
      as="div"
      id="home"
      className="flex flex-col object-cover bg-center bg-no-repeat bg-hero-mobile md:bg-hero lg:bg-center"
    >
      {({ open }) => (
        <>
          <div className="p-2 border-b border-gray-600/40">
            <Container className="flex items-center justify-between text-sm font-light text-gray-200 md:text-base">
              <p>Robotnicza 236, 82-300 Elbląg</p>
              <a href="tel:506-166-760">Tel: 506-166-760</a>
            </Container>
          </div>
          <div className="relative">
            <Container className="flex items-center justify-between p-2">
              <Logo />
              <ul className="items-center hidden gap-x-5 lg:flex">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-100 transition-all duration-200 ease-in-out hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-200 rounded-md lg:hidden hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <IconX className="block w-7 h-7" aria-hidden="true" />
                ) : (
                  <IconMenu2 className="block w-7 h-7" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </Container>

            <Disclosure.Panel className="absolute w-full border-b-2 lg:hidden bg-zinc-800 border-lime-600">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={cn(
                      "text-gray-300 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
          <div className="flex flex-col items-center justify-center py-20 sm:py-32 md:py-64 grow">
            <div className="w-3/4 mx-auto text-center">
              <h1 className="text-5xl font-bold tracking-tighter lg:text-7xl text-lime-500">
                Osiągnij swoje najlepsze ja!
              </h1>
              <p className="hidden w-full mx-auto mt-8 font-light leading-7 tracking-tight text-gray-200 md:block lg:w-3/4">
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

            <div className="flex flex-col items-center justify-center mt-6 space-x-4 md:flex-row">
              <Avatar src="https://lh3.googleusercontent.com/a-/AD_cMMRFEKOqPgHAcaNRXJpSg343A11PRRE7Te0W4UDae5bnGg=w60-h60-p-rp-mo-br100" />
              <p className="w-3/4 mt-4 text-lg font-light tracking-tight text-gray-200 md:mt-0 lg:w-1/2">
                &ldquo;Elegancko. Sporo uczęszczających ale nie brakuje sprzętu.
                Bardzo miła obsługa. osobne salki treningowe. dla mnie ideolo.
                Polecam i pozdrawiam!&rdquo;
              </p>
            </div>
          </div>
          <div className="mb-16">
            <Cards />
          </div>
        </>
      )}
    </Disclosure>
  );
}
