import { IconStarFilled } from "@tabler/icons-react";
import { Avatar } from "./Avatar";

export function Testimonial() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <figure className="max-w-2xl mx-auto">
        <p className="sr-only">5 out of 5 stars</p>
        <div className="flex text-lime-600 gap-x-1">
          <IconStarFilled size={22} className="flex-none" aria-hidden="true" />
          <IconStarFilled size={22} className="flex-none" aria-hidden="true" />
          <IconStarFilled size={22} className="flex-none" aria-hidden="true" />
          <IconStarFilled size={22} className="flex-none" aria-hidden="true" />
          <IconStarFilled size={22} className="flex-none" aria-hidden="true" />
        </div>
        <blockquote className="mt-6 text-xl font-semibold leading-8 tracking-tight sm:text-2xl sm:leading-9">
          <p>
            “Rewelacyjna siłownia, jedyna w Elblągu, w której czuję się
            komfortowo! Obsługa bardzo miła, nie czujesz się przez nikogo
            obserwowany :) Bardzo polecam, warto!”
          </p>
        </blockquote>
        <figcaption className="flex items-center mt-6 gap-x-3">
          <Avatar src="https://lh3.googleusercontent.com/a-/AD_cMMRTYNgTksr5YJipqzU0Y0yP8WLJRQIXBlTRWUsrrgKft_8=w60-h60-p-rp-mo-br100" />
          <div className="text-sm leading-6">
            <div className="text-lg font-semibold">Maja Nisigowska</div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
