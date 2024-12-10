import { Download } from "lucide-react";
import Link from "next/link";
import Social from "@/components/social";
import Photo from "@/components/photo";

const Hero = () => {
  return (
    <section className="w-f pt-40">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between gap-10 xl:flex-row xl:pt-8">
          {/* text */}

          <div className="text-center xl:text-left">
            <span>Salut je suis</span>
            <h1 className="text-[40px] font-bold capitalize leading-[3rem]">
              ISAAC<br />
              <span className="under-line">{`NEWTON`}</span>
            </h1>
            <div className="py-8">
              <p>
              Développeur full stack créatif et dynamique, expert en conception d'applications web innovantes, alliant esthétique et performance. Passionné par les nouvelles technologies, je transforme les idées en solutions impactantes, tout en garantissant une expérience utilisateur exceptionnelle.
              </p>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center xl:flex-row xl:justify-start xl:space-x-8">
              <div className="flex gap-x-2">
                <Link
                  href="#"
                  className="flex items-center space-x-2 rounded-full border-2 border-white px-6 py-3 font-medium uppercase text-white transition-all hover:bg-black hover:text-lighted"
                >
                  <span className="text-sm">Telecharger Cv</span>
                  <Download className="size-5" />
                </Link>
              </div>
              <div className="flex py-4 xl:py-0">
                <Social />
              </div>
            </div>
          </div>
          {/* image */}

          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
