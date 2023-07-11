import { cn } from "@/lib/cn";
import { tiers } from "@/lib/constants/pricing";
import { IconCircleCheck } from "@tabler/icons-react";

export function Pricing() {
  return (
    <div className="grid max-w-md grid-cols-1 gap-8 mx-auto mt-16 isolate lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={cn(
            "even:ring-lime-600 even:bg-lime-100 ring-1 ring-gray-200 bg-gray-50",
            "rounded-3xl p-8 xl:p-10"
          )}
        >
          <div className="flex items-center justify-between gap-x-4">
            <h3
              id={tier.id}
              className={cn("text-gray-900", "text-lg font-semibold leading-8")}
            >
              {tier.name}
            </h3>
          </div>
          <p className="flex items-baseline mt-6 gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-gray-900">
              {tier.price}
            </span>
          </p>
          <ul
            role="list"
            className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
          >
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-center gap-x-3">
                <IconCircleCheck
                  size={26}
                  className="text-lime-600"
                  aria-hidden="true"
                />
                <span className="text-lg tracking-tight text-bold">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
