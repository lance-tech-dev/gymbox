import type { Metadata } from "next";
import { LocationMap } from "@/components/location-map";
import { GYM_INFO } from "@/lib/gym-info";

export const metadata: Metadata = {
  title: "Location",
  description: `Find ${GYM_INFO.name} on the map and get directions.`,
};

const linkButton =
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-colors";

export default function LocationPage() {
  const { location, hours, phone } = GYM_INFO;

  return (
    <main className="px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-sm font-medium text-brand-red">
            Location
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Visit GymBox
          </h1>
          <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
            Find us on the map below and get directions straight to the gym. Walk-ins are
            always welcome.
          </p>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <LocationMap className="h-80 sm:h-[28rem]" />

          <aside className="flex flex-col gap-6 self-start rounded-2xl border border-border bg-surface-card p-6 sm:p-8">
            <div>
              <h2 className="text-lg font-black uppercase text-text-primary">{GYM_INFO.name}</h2>
              {location.address && (
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{location.address}</p>
              )}
              {location.landmark && (
                <p className="mt-1 text-sm text-text-muted">Landmark: {location.landmark}</p>
              )}
            </div>

            {hours && hours.length > 0 && (
              <div className="border-t border-border pt-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Opening Hours
                </h3>
                <dl className="mt-3 space-y-2 text-sm">
                  {hours.map((row) => (
                    <div key={row.days} className="flex justify-between gap-4">
                      <dt className="text-text-secondary">{row.days}</dt>
                      <dd className="font-medium text-text-primary">{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {phone && (
              <div className="border-t border-border pt-5 text-sm">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Contact
                </h3>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="mt-2 block font-medium text-text-primary hover:text-brand-red">
                  {phone}
                </a>
              </div>
            )}

            <div className="flex flex-col gap-3 border-t border-border pt-5">
              <a
                href={location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkButton} bg-brand-red text-white hover:bg-brand-red-dark`}
              >
                Get Directions
              </a>
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkButton} border border-border text-text-primary hover:border-border-strong hover:bg-surface-hover`}
              >
                Open in Google Maps
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
