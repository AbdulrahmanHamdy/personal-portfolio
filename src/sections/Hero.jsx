import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "ASP.NET Core",
  "C#",
  "JavaScript",
  "TypeScript",
  "SQL Server",
  "MySQL",
  "Flutter",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "REST APIs",
  "OOP",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left */}
          <div className="space-y-8">

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm text-green-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Computer Science Student • Backend Developer
            </span>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-green-400">Abdelrahman</span>
                <br />
                Building modern
                <br />
                <span className="italic font-normal text-white">
                  web applications.
                </span>
              </h1>

              <p className="text-lg text-gray-300 max-w-lg">
                I'm Abdelrahman Hamdi, a Computer Science student at Ain Shams University.  
                I specialize in building scalable web applications using 
                ASP.NET Core and React.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
                <a href="/cv.pdf" download>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow me:</span>

              <a href="https://github.com/AbdulrahmanHamdy" className="p-2 rounded-full bg-white/10 hover:text-green-400">
                <Github className="w-5 h-5" />
              </a>

              <a href="https://www.linkedin.com/in/abdelrahmanhamdi/" className="p-2 rounded-full bg-white/10 hover:text-green-400">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="relative rounded-3xl p-2 border border-white/10">
                <img
                  src="/profile-photo.jpg"
                  alt="Abdelrahman"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Badge */}
                <div className="absolute -bottom-4 -right-4 bg-black/80 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm">Available for work</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="absolute -top-4 -left-4 bg-black/80 rounded-xl px-4 py-3">
                  <div className="text-2xl font-bold text-green-400">3+</div>
                  <div className="text-xs text-gray-400">
                    Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <p className="text-sm text-gray-400 mb-6 text-center">
            Technologies I work with
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, idx) => (
              <span key={idx} className="text-gray-400 hover:text-white">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center text-gray-400">
          <span className="text-xs">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};