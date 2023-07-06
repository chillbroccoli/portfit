import { IconBrandFacebook } from "@tabler/icons-react";

export const navigation = [
  { name: "Strona Główna", href: "#home" },
  { name: "Oferta Klubu", href: "#features" },
  { name: "Nasz Cennik", href: "#membership" },
  { name: "O nas", href: "#about" },
  {
    name: "Strefa Klienta",
    href: "https://portfit-elblag.cms.efitness.com.pl/",
  },
];

export const footerNavigation = {
  main: navigation,
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/PortFit-636610263144416/",
      icon: IconBrandFacebook,
    },
  ],
};
