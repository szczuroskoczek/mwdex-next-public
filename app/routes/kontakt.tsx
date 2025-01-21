import { GoBackHeader } from "~/lib/GoBackHeader";
import { useEffect } from "react";
import { makeMeta } from "~/lib/makeMeta";
import { Link } from "@remix-run/react";

export const meta = makeMeta({
  title: "Kontakt",
  description:
    "Skontaktuj się z nami! Oferujemy profesjonalne konsultacje i wyceny projektów. Skorzystaj z szybkiego kontaktu online. Pomożemy w realizacji Twojego projektu internetowego.",
});

export default function Kontakt() {
  useEffect(() => {
    const token = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
    const script = document.createElement("script");
    script.src = `https://www.oferteo.pl/widget/firma/20/6647448?ext=2-0-1&token=${token}`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black overflow-auto">
      <GoBackHeader />
      <div className="min-h-screen w-full bg-gradient-to-br from-mwdf-500 to-mwdf-900 pt-24 px-4 pb-6">
        <section className="max-w-2xl mx-auto">
          <div className="mb-12 backdrop-blur-lg rounded-xl p-8 bg-white/5">
            <h3 className="text-2xl font-light text-white mb-4">Dane firmy</h3>
            <div className="space-y-2 text-gray-300">
              <p>MWD Krystian Mikołajczyk</p>
              <p>NIP: 7343591547</p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-light text-white mb-4">Email</h3>
            <a
              href="mailto:krystianb127098@outlook.com"
              className="group flex items-center justify-center space-x-3 p-4 rounded-xl
                bg-gradient-to-r from-blue-500/20 to-cyan-500/20 
                border border-white/10 hover:border-white/20 
                backdrop-blur-sm transition-all duration-300"
            >
              <span className="text-2xl">📧</span>
              <span className="text-white font-light">krystianb127098@outlook.com</span>
            </a>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-light text-white mb-4">Telefon</h3>
            <a
              href="tel:+48795615510"
              className="group flex items-center justify-center space-x-3 p-4 rounded-xl
                bg-gradient-to-r from-green-500/20 to-emerald-500/20 
                border border-white/10 hover:border-white/20 
                backdrop-blur-sm transition-all duration-300"
            >
              <span className="text-2xl">📱</span>
              <span className="text-white font-light">795 615 510</span>
            </a>
          </div>

          <div className="backdrop-blur-lg rounded-xl">
            <div className="oferteo-widget">
              <Link
                className="widget-url text-white/80 hover:text-white transition-colors"
                to="https://www.oferteo.pl/mwd-krystian-mikolajczyk/firma/6647448#opinie"
              >
                MWD Krystian Mikołajczyk
              </Link>
              <div className="ofe-6647448-20 width-1/5" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
