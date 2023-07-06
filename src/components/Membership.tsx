import { Pricing } from "./Pricing";

export function Membership() {
  return (
    <div id="czlonkostwo" className="px-6 py-20 lg:px-14 bg-lime-600/20">
      <h3 className="text-4xl font-bold tracking-tight text-center">
        Członkostwo
      </h3>
      <p className="mt-6 text-lg font-light tracking-tight text-center text-gray-200">
        Nawiąż mocne więzi i dołącz do naszej fit społeczności!
      </p>
      <Pricing />
    </div>
  );
}
