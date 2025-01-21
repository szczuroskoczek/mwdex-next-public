import { GoBackHeader } from "~/lib/GoBackHeader";
import { motion } from "framer-motion";
import { makeMeta } from "~/lib/makeMeta";

export const meta = makeMeta({
  title: "Realizacje",
  description:
    "Zobacz moje portfolio projektów webowych. Od stron firmowych po zaawansowane aplikacje z CMS, wielojęzycznością i sztuczną inteligencją. Sprawdź jak możemy pomóc w rozwoju Twojego biznesu online.",
});

interface Project {
  name: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  projectUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: "Chynowa Lipie",
    description: "Rozbudowana strona promująca siedlisko w Chynowej Lipie.",
    desktopImage: "/portfolio/chynowa-lipie.png",
    mobileImage: "/portfolio/chynowa-lipie-mobile.png",
    projectUrl: "https://chynowa-verabis.pl",
    tags: ["CMS", "Formularz", "Wielojęzyczność"],
  },
  {
    name: "Pasieka Na Sośniu",
    description: "Bzzzzzzz",
    desktopImage: "/portfolio/pns.png",
    mobileImage: "/portfolio/pns-mobile.png",
    projectUrl: "https://pasieka-na-sosniu.pl",
    tags: ["CMS", "Formularz"],
  },
  {
    name: "(stary MWDEX)",
    description: '5 godzin wystarczy aby "coś" działało.',
    desktopImage: "/portfolio/mwdstary.png",
    mobileImage: "/portfolio/mwdstary-mobile.png",
    projectUrl: "#",
    tags: [],
  },
  {
    name: "MK Renhold",
    description:
      "Strona dla firmy sprzatającej w Norwegii, z rozszerzoną funkcjonalnością tak jak skomplikowany kalkulator cen i wirtualny asystent.",
    desktopImage: "/portfolio/mkr.png",
    mobileImage: "/portfolio/mkr-mobile.png",
    projectUrl: "https://mkrenholdoslo.no",
    tags: [
      "Formularz",
      "Wielojęzyczność",
      "Kalkulator Cen",
      "Sztuczna Inteligencja jako Wirtualny Asystent",
    ],
  },
];

export default function Portfolio() {
  return (
    <div className="fixed inset-0 bg-black overflow-auto">
      <GoBackHeader />
      <div className="min-h-screen w-full bg-gradient-to-br from-mwdf-500 to-mwdf-900 pt-24 px-4 pb-12">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto flex md:flex-wrap flex-col md:flex-row">
            {projects.map((project, index) => (
              <motion.div
                className="p-4"
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    !window.confirm(
                      "Ta strona otworzy się w nowej karcie. Kontynuować?"
                    ) && e.preventDefault();
                  }}
                  className="block rounded-xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-light text-white mb-6">
                      {project.name}
                    </h3>

                    <div className="flex flex-nowrap items-end gap-4 mb-6">
                      <div className="relative group">
                        <motion.img
                          src={project.desktopImage}
                          alt={`${project.name} - Desktop View`}
                          className="w-[268px] rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="relative group">
                        <motion.img
                          src={project.mobileImage}
                          alt={`${project.name} - Mobile View`}
                          className="h-[113px] w-[78px] rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>

                    <p className="max-w-[400px] text-gray-300 font-light text-sm leading-relaxed mb-4 text-ellipsis">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 max-w-[400px]">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-sm font-light text-white/80 bg-white/10 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
