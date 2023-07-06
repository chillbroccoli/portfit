import { IconBrandFacebook } from "@tabler/icons-react";

export const navigation = [
  { name: "Strona Główna", href: "#strona-glowna" },
  { name: "Oferta Klubu", href: "#oferta-klubu" },
  { name: "Nasz Cennik", href: "#czlonkostwo" },
  { name: "O nas", href: "#o-nas" },
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
