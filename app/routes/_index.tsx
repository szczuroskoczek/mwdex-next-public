import { makeMeta } from "~/lib/makeMeta";
export const meta = makeMeta({
  title: "Strona główna",
  description:
    "Profesjonalne usługi programistyczne i web development. Tworzymy nowoczesne aplikacje internetowe, strony www oraz rozwiązania cyfrowe dostosowane do potrzeb Twojego biznesu. Specjalizacja w React, TypeScript i Node.js.",
});

import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import mwd_logo_spec from "~/lib/mwd_logo_spec";

import { Link } from "@remix-run/react";

export default function Index() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <div
      className="fixed inset-0 bg-black overflow-auto"
      onMouseMove={handleMouseMove}
    >
      <div className="min-h-screen w-full bg-gradient-to-br from-mwdf-500 to-mwdf-900 relative flex items-center justify-center px-4 md:px-16">
        {/* Background Particles Effect */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-16 w-full max-w-7xl">
          {/* Logo & CTA Section */}
          <motion.div
            className="text-center md:text-left space-y-8 flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={ { opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={mwd_logo_spec.viewBox}
              className="mt-12 md:mt-0 w-64 md:w-80 drop-shadow-2xl"
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.path
                d={mwd_logo_spec.path}
                fill="none"
                stroke="white"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: { duration: 2, ease: "easeInOut" },
                  opacity: { duration: 1, ease: "easeInOut" },
                }}
              />
              <motion.path
                d={mwd_logo_spec.path}
                fill="white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 2,
                  duration: 1,
                  ease: "easeInOut",
                }}
              />
            </motion.svg>

            <motion.h2
              className="text-3xl md:text-4xl text-white font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Krystian Mikołajczyk
            </motion.h2>

            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center md:items-start">
              {[
                {
                  label: "Kontakt",
                  href: "/kontakt",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  label: "Realizacje",
                  href: "/realizacje",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  label: "CV",
                  href: "/cv",
                  gradient: "from-amber-500 to-orange-500",
                },
              ].map((cta) => (
                <Link
                  key={cta.label}
                  to={cta.href}
                  prefetch="render"
                  className={`px-8 py-3 rounded-lg bg-gradient-to-r ${cta.gradient} text-white font-medium 
                    shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 
                    backdrop-blur-sm relative overflow-hidden group hover:scale-105`}
                >
                  <span className="relative z-10">{cta.label}</span>

                  {/* radial white gradient */}
                  <div className="absolute w-full h-full inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.5)_0%,_rgba(0,0,0,0.1)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services Grid Section */}
          <motion.div
            className="relative w-full max-w-6xl mx-auto drop-shadow-2xl"
            style={{ perspective: 2000 }}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative rounded-2xl overflow-hidden backdrop-blur-xl border border-mwdf-300 drop-shadow-2xl m-4"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mwdf-900 to-mwdf-500 opacity-90" />
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                style={{
                  backgroundImage:
                    'url(\'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3C/g%3E%3C/svg%3E\')',
                }}
              />

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                <AnimatePresence>
                  {[
                    {
                      title: "Strony WWW",
                      icon: "🌐",
                      description: "Nowoczesne i responsywne",
                      gradient: "from-blue-500/20 to-cyan-500/20",
                    },
                    {
                      title: "UI/UX Design",
                      icon: "✨",
                      description: "Intuicyjne interfejsy",
                      gradient: "from-purple-500/20 to-pink-500/20",
                    },
                    {
                      title: "SEO/Marketing",
                      icon: "📈",
                      description: "Skuteczna widoczność",
                      gradient: "from-green-500/20 to-emerald-500/20",
                    },
                    {
                      title: "Dedykowane Aplikacje",
                      icon: "⚡",
                      description: "Szyte na miarę",
                      gradient: "from-amber-500/20 to-orange-500/20",
                    },
                  ].map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      whileHover={{ scale: 1.02, translateZ: 20 }}
                      className="group relative"
                    >
                      <div
                        className={`relative p-6 rounded-xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300`}
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative flex items-center space-x-4">
                          <span className="text-3xl filter drop-shadow-glow">
                            {service.icon}
                          </span>
                          <div>
                            <h3 className="text-xl font-light text-white mb-1">
                              {service.title}
                            </h3>
                            <p className="text-sm text-gray-300 font-light">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
