import { GoBackHeader } from "~/lib/GoBackHeader";

import { makeMeta } from "~/lib/makeMeta";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import {
  DownloadIcon,
  MailIcon,
  MapPinHouseIcon,
  PhoneIcon,
  GlobeIcon,
} from "lucide-react";

import { QRCodeSVG } from "qrcode.react";

import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { token } from "~/cookies.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const password = formData.get("password");

  if (!password) {
    return new Response(null, {
      status: 400,
    });
  }

  if (["hirekrystian"].includes(password.toString())) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/cv",
        "Set-Cookie": await token.serialize("hirekrystian"),
      },
    });
  }

  return new Response(null, {
    status: 400,
  });
}

export const meta = makeMeta({
  title: "CV",
  description: "Moje CV",
});

interface I_CV {
  personalInfo: {
    name: string;
    location: string;
    email: string;
    phone: string;
    www: string;
    title: string;
    languages: {
      flag: string;
      language: {
        en: string;
        pl: string;
      };
      proficiency: string;
    }[];
  };
  professionalSummary: {
    en: string[];
    pl: string[];
  };
  skills: {
    en: string[];
    pl: string[];
  };
  workHistory: {
    company: string;
    position: string;
    period: {
      start: string;
      end: string;
    };
    description: {
      en: string;
      pl: string;
    };
  }[];
  education: {
    institution?: string;
    degree?: string;
    fieldOfStudy?: string;
    startYear?: string;
    endYear?: string;
  }[];
}

export const loader = async ({
  request,
}: LoaderFunctionArgs): Promise<null | I_CV> => {
  const cookie = await token.parse(request.headers.get("Cookie"));

  if (cookie !== "hirekrystian") {
    const urlSearchToken = new URL(request.url).searchParams.get("token");

    if (urlSearchToken === "hirekrystian") {
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/cv",
          "Set-Cookie": await token.serialize("hirekrystian"),
        },
      }) as never;
    } else {
      return null;
    }
  }

  const CV: I_CV = {
    personalInfo: {
      name: "Krystian Mikołajczyk",
      location: "255 Zagorzyn, 33-390, Poland",
      email: "krystianb127098@outlook.com",
      phone: "+48 795 615 510",
      www: "https://mwdex.pl/",
      title: "Fullstack Developer",
      languages: [
        {
          flag: "gb",
          language: { en: "English", pl: "Angielski" },
          proficiency: "native",
        },
        {
          flag: "pl",
          language: { en: "Polish", pl: "Polski" },
          proficiency: "native",
        },
      ],
    },
    professionalSummary: {
      en: [
        `🚀 Full-Stack Developer & Technology Consultant 💡 Tech enthusiast turned professional developer with 5 years in the field. I craft modern web solutions and build robust system architectures. Started coding back in secondary school, and never looked back - now I live and breathe the full technology stack.`,
        `My sweet spot? JavaScript and its ecosystem, backed by solid Linux expertise and battle-hardened deployment experience. 💻 ⚡ When tackling projects, I dig deep into the core issues. My thing is building fast, scalable systems that just work. Years of debugging trenches and real-world projects have taught me how to spot and fix problems before they blow up. 🔧`,
        `🌟 These days I'm running my own freelance web development gig while diving into machine learning. The big dream? Building a tech company that makes a real difference. From network cables to cloud architecture, I've got the technical chops to turn complex challenges into elegant solutions. 🎯`,
      ],
      pl: [
        `🚀 Full-Stack Developer i Konsultant Technologiczny 💡 Entuzjasta technologii, który stał się profesjonalnym programistą z 5-letnim doświadczeniem w branży. Tworzę nowoczesne rozwiązania webowe i buduję solidne architektury systemów. Zacząłem programować jeszcze w szkole średniej i od tamtej pory się tym zajmuję – technologia to teraz moja codzienność.`,
        `Mój konik? Ekosystem JavaScript, wsparty solidną wiedzą na temat Linuxa i bogatym doświadczeniem w zakresie wdrażania aplikacji. 💻 ⚡ W projektach skupiam się na identyfikacji kluczowych problemów. Uwielbiam budować szybkie i skalowalne systemy, które po prostu działają. Lata doświadczenia w rozwiązywaniu błędów i realizacji prawdziwych projektów nauczyły mnie, jak dostrzegać i rozwiązywać problemy, zanim staną się krytyczne. 🔧`,
        `🌟 Obecnie prowadzę własną działalność jako freelancer zajmujący się tworzeniem stron internetowych, jednocześnie zgłębiając uczenie maszynowe. Moje wielkie marzenie? Stworzenie firmy technologicznej, która naprawdę coś zmieni. Od kabli sieciowych po architekturę chmurową – mam umiejętności techniczne, by przekształcać skomplikowane wyzwania w eleganckie rozwiązania. 🎯`,
      ],
    },
    skills: {
      en: [
        "Web Development",
        "Web Application",
        "JavaScript",
        "React",
        "Web Design",
        "Node.js",
        "Database",
        "Linux",
        "TypeScript",
        "Cloud Services",
        "Docker",
        "MongoDB",
        "Web Design",
        "Marketing",
      ],
      pl: [
        "Strony WWW",
        "Aplikacje webowe",
        "Rozwój międzynarodowy",
        "JavaScript",
        "React",
        "Node.js",
        "Bazy danych",
        "Linux",
        "TypeScript",
        "Usługi w chmurze",
        "Docker",
        "MongoDB",
        "Web Design",
        "Marketing",
      ],
    },
    workHistory: [
      {
        company: "BFS Consulting",
        position: "Full-Stack Software Engineer",
        period: {
          start: "2020-06",
          end: "2024-09",
        },
        description: {
          en: `Developed and maintained complex end-to-end software solutions across multiple technology stacks, architecting robust applications from system design to production deployment. Implemented scalable backend services and responsive frontend interfaces using JavaScript and modern web technologies. Engineered high-performance data processing systems, real-time communication solutions, and automated deployment pipelines. Designed and optimized database structures, ensuring efficient data management and system reliability. Created sophisticated image processing workflows and integrated various communication protocols for seamless data exchange. Established comprehensive security measures and monitoring systems while maintaining high availability standards. Orchestrated containerized applications in cloud environments, implementing infrastructure as code practices. Optimized application performance through advanced caching strategies and load balancing techniques.`,
          pl: `Tworzyłem i utrzymywałem złożone rozwiązania programistyczne typu end-to-end, wykorzystując różne stosy technologiczne, projektując solidne aplikacje od koncepcji systemu po wdrożenie produkcyjne. Wdrażałem skalowalne usługi backendowe i responsywne interfejsy frontendowe z wykorzystaniem JavaScript oraz nowoczesnych technologii webowych. Projektowałem i optymalizowałem struktury baz danych, zapewniając wydajne zarządzanie danymi oraz niezawodność systemu. Tworzyłem zaawansowane przepływy przetwarzania obrazu oraz integrowałem różne protokoły komunikacyjne dla płynnej wymiany danych. Ustanowiłem kompleksowe środki bezpieczeństwa i systemy monitorujące, utrzymując wysokie standardy dostępności. Organizowałem aplikacje konteneryzowane w środowiskach chmurowych, wdrażając praktyki Infrastructure as Code. Optymalizowałem wydajność aplikacji za pomocą zaawansowanych strategii buforowania oraz technik równoważenia obciążenia.`,
        },
      },
      {
        company: "PAR Glass Ltd",
        position: "IT Administrator",
        period: {
          start: "2019-01",
          end: "2020-03",
        },
        description: {
          en: `Responsible for maintaining the company website, ensuring smooth functionality and user experience. Oversaw office IT systems, conducted routine maintenance, and resolved technical issues. Led digital marketing efforts and coordinated social media campaigns to enhance brand visibility and audience engagement.`,
          pl: `Odpowiadałem za utrzymanie strony internetowej firmy, zapewniając jej sprawne działanie i dobrą jakość obsługi użytkownika. Nadzorowałem biurowe systemy IT, przeprowadzałem rutynowe konserwacje i rozwiązywałem problemy techniczne. Prowadziłem działania marketingu cyfrowego oraz koordynowałem kampanie w mediach społecznościowych w celu zwiększenia widoczności marki i zaangażowania odbiorców.`,
        },
      },
      {
        company: "PC Tech Centre",
        position: "Apprentice Technician",
        period: {
          start: "2017-11",
          end: "2018-01",
        },
        description: {
          en: `In this role, I assisted with PC and laptop repairs, including hardware diagnostics, component replacements, and operating system reinstallation. I learned to identify and resolve performance issues efficiently, maintain a safe workspace, and communicate technical details effectively under the guidance of experienced technicians.`,
          pl: `W tej roli pomagałem przy naprawach komputerów PC i laptopów, w tym diagnostyce sprzętu, wymianie komponentów oraz reinstalacji systemów operacyjnych. Nauczyłem się efektywnego identyfikowania i rozwiązywania problemów z wydajnością, utrzymania bezpiecznego miejsca pracy oraz skutecznej komunikacji szczegółów technicznych pod okiem doświadczonych techników.`,
        },
      },
    ],
    education: [],
  };

  return CV;
};

const NoContent: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="backdrop-blur-lg rounded-xl p-8 bg-white/5">
        <span className="text-6xl mb-6 block">🔒</span>
        <h1 className="text-3xl font-light text-white mb-4">
          Dostęp Zablokowany
        </h1>
        <form
          method="post"
          className="flex flex-col items-center gap-4"
          autoComplete="off"
        >
          <input
            type="password"
            name="password"
            className="w-64 px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40"
            placeholder="Wprowadź hasło"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white/15 text-white rounded-lg hover:bg-white/25 transition-colors"
          >
            Odblokuj
          </button>
        </form>
      </div>
    </div>
  );
};

const Content: React.FC<{
  data: I_CV;
}> = ({ data }: { data: I_CV }) => {
  const [language, setLanguage] = useState<"pl" | "en">("pl");
  return (
    <div className="flex flex-col">
      <div className="flex max-w-[210mm] mx-auto w-full items-center py-2">
        <a
          href="/cv_download"
          className="p-2 mx-2 text-white bg-white/15 rounded-lg hover:bg-white/25"
        >
          <DownloadIcon />
        </a>
        <div className="flex items-center bg-white/15 rounded-lg">
          {(
            [
              { lang: "pl", label: "Polski" },
              { lang: "en", label: "English" },
            ] as const
          ).map(({ lang, label }) => (
            <button
              key={lang}
              className={`px-4 m-2 rounded text-white flex items-center ${
                language === lang ? "bg-white/25" : ""
              }`}
              onClick={() => setLanguage(lang)}
            >
              <img
                className="h-4 mr-2"
                src={`https://flagcdn.com/32x24/${
                  lang === "en" ? "gb" : lang
                }.png`}
                alt={`flag ${lang}`}
              />
              {label}
            </button>
          ))}
        </div>
      </div>
      <div
        id="cv"
        className="w-full max-w-[210mm] bg-white rounded shadow-lg mx-auto overflow-hidden"
      >
        <div className="w-full h-full p-6 flex flex-col gap-6">
          <header className="flex flex-col sm:flex-row justify-between items-start border-b border-slate-600 pb-4">
            <div>
              <h1 className="text-4xl font leading-tight text-mwdf-500 drop-shadow-sm font-serif">
                {data.personalInfo.name}
              </h1>
              <h2 className="text-md font-semibold text-mwdf-900">
                {data.personalInfo.title}
              </h2>
              <div className="flex gap-1 justify-end mt-1 flex-wrap text-gray-800 flex-col leading-none">
                {data.personalInfo.languages.map((lang) => (
                  <span
                    key={lang.language[language]}
                    className="flex items-center text-sm leading-none"
                  >
                    <img
                      className="h-3 mr-2"
                      src={`https://flagcdn.com/32x24/${lang.flag}.png`}
                      alt={`flag ${lang}`}
                    />
                    {lang.language[language]}:{" "}
                    {
                      // @ts-expect-error idk
                      { en: { native: "Native" }, pl: { native: "Ojczysty" } }[
                        language
                      ][lang.proficiency]
                    }
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 self-end">
              <div className="flex flex-col text-xs text-mwdf-700 p-3 rounded-md leading-relaxed">
                <p className="flex justify-center items-center gap-1 self-end">
                  {data.personalInfo.location}
                  <MapPinHouseIcon className="h-4" />
                </p>
                <a
                  href={`mailto:${data.personalInfo.email}`}
                  className="underline decoration-black/25 flex justify-center items-center gap-1 self-end"
                >
                  {data.personalInfo.email}
                  <MailIcon className="h-4" />
                </a>
                <a
                  href={`tel:${data.personalInfo.phone}`}
                  className=" underline decoration-black/25 flex justify-center items-center gap-1 self-end"
                >
                  {data.personalInfo.phone}
                  <PhoneIcon className="h-4" />
                </a>
                <a
                  href={`${data.personalInfo.www}`}
                  className="underline decoration-black/25 flex justify-center items-center gap-1 self-end"
                >
                  {data.personalInfo.www}
                  <GlobeIcon className="h-4" />
                </a>
              </div>
              <div className="w-20 h-20">
                <QRCodeSVG
                  value={data.personalInfo.www}
                  className="w-full h-full"
                />
              </div>
            </div>
          </header>
          <section className="space-y-2">
            <h3 className="text-sm font-bold mb-1 text-mwdf-600 uppercase">
              Professional Summary
            </h3>
            {data.professionalSummary[language].map((paragraph, index) => (
              <p key={index} className="text-xs leading-tight text-mwdf-900">
                {paragraph}
              </p>
            ))}
          </section>
          <section>
            <h3 className="text-sm font-bold mb-2 text-mwdf-600 uppercase tracking-wider">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.skills[language].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 bg-mwdf-100 text-mwdf-900 rounded text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
          <section className="flex-1">
            <h3 className="text-sm font-bold mb-2 text-mwdf-600 uppercase tracking-wider">
              Work Experience
            </h3>
            <div className="space-y-4">
              {data.workHistory.map((work) => (
                <div
                  key={work.company}
                  className="border-l-4 border-mwdf-300 pl-4"
                >
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h4 className="text-md font-semibold text-mwdf-900">
                        {work.position}
                      </h4>
                      <h5 className="text-xs text-mwdf-600">{work.company}</h5>
                    </div>
                    <span className="text-xs text-mwdf-500 font-medium">
                      {work.period.start} - {work.period.end}
                    </span>
                  </div>
                  <p className="text-xs mt-1 text-mwdf-700 leading-tight">
                    {work.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-mwdf-500 to-mwdf-900 pt-24 px-4 pb-6">
      <GoBackHeader />
      {data ? <Content data={data} /> : <NoContent />}
    </div>
  );
}
