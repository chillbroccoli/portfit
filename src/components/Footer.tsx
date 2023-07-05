import { IconBrandFacebook } from "@tabler/icons-react";

const navigation = {
  main: [
    { name: "Strona Główna", href: "#home" },
    { name: "Oferta Klubu", href: "#features" },
    { name: "Nasz Cennik", href: "#membership" },
    { name: "O nas", href: "#about" },
    {
      name: "Strefa Klienta",
      href: "https://portfit-elblag.cms.efitness.com.pl/",
    },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/PortFit-636610263144416/",
      icon: IconBrandFacebook,
    },
  ],
};

export default function Footer() {
  return (
    <footer>
      <div className="px-6 py-20 mx-auto overflow-hidden max-w-7xl sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-200 hover:text-gray-50"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-10 space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon
                size={22}
                className="text-lime-600"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
        <p className="mt-10 text-xs leading-5 text-center text-gray-300">
          &copy; {new Date().getFullYear()} PortFit. Wszystkie prawa
          zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
