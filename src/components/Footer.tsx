import { footerNavigation } from "@/lib/constants/navigation";

export default function Footer() {
  return (
    <footer>
      <div className="px-6 py-20 mx-auto overflow-hidden max-w-7xl sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {footerNavigation.main.map((item) => (
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
          {footerNavigation.social.map((item) => (
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
