import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Badge } from "@workspace/ui/components/badge";
import { SearchIcon } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const age = new Date().getFullYear() - 1998;

  return (
    <>
      {/* Section Avatar and Intro */}
      <section
        id="intro"
        className=" scroll-mt-32
        grid grid-cols-[auto_1fr]
        gap-8 max-md:gap-4"
      >
        <div className="flex justify-center md:justify-start row-span-2">
          <Avatar className="w-[100px] sm:w-[150px]  md:w-[200px] h-[100px] sm:h-[150px] md:h-[200px]   lg:w-[300px] lg:h-[300px] grayscale">
            <AvatarImage src="https://github.com/andrihadiansah.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col justify-end">
          <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Andri Hadiansah
            <br className="md:hidden" />
            <span className="font-normal text-base sm:text-lg">
              {" ✨"}he/him
            </span>
          </span>
          <span className="text-sm sm:text-base">
            {age}yo , Live in Bandung, ID+62.
          </span>
        </div>
        <div className="max-md:col-span-2 h-full items-start flex">
          <div>
            <blockquote className="border-l pl-4 text-pretty sm:text-lg justify-center max-md:col-span-2">
              I'm not sure how to intro myself anymore, I'm graduated
              Communication Science at{" "}
              <Link
                href={"https://unikom.ac.id/"}
                className="inline-flex items-center gap-2"
              >
                <Badge>
                  UNIKOM <SearchIcon className="h-4 w-4" />
                </Badge>
              </Link>
              , but I love everything related to Web Dev, Game Dev, and
              Pixelart. And, let's dig deeper to find out more about me.
            </blockquote>
          </div>
        </div>
        <div className="max-lg:hidden flex flex-col sticky gap-8 border text-2xl">
          <a href="#intro" className="hover:underline">
            intro
          </a>
          <a href="#experience" className="hover:underline">
            work <br />
            experience
          </a>
          <a href="#stack" className="hover:underline">
            stack
          </a>
          <a href="#studies" className="hover:underline">
            studies
          </a>
          <a href="#other" className="hover:underline">
            other
          </a>
        </div>

        {/* -------- */}
        <div className="flex-1 max-lg:col-span-2 space-y-8">
          <section
            id="experience"
            className="flex flex-col gap-4 pl-4 py-4 border-l"
          >
            <h2 className="text-xl font-bold border-b pb-2">Work Experience</h2>
            <div className="flex justify-between">
              <span>
                <h3 className="text-2xl">Car Sales Trainee</h3>
                <p>PT. Nusantara Jaya Sentosa - Branch Naripan</p>
              </span>
              <span>2024</span>
            </div>
            <div className="flex justify-between">
              <span>
                <h3 className="text-2xl">Teacher Computer Networking</h3>
                <p>High Vocational School - SMK Genius Bandung</p>
              </span>
              <span>2023</span>
            </div>
          </section>
          {/* -------- */}
          <section id="tech" className="flex flex-col gap-4 pl-4 py-4 border-l">
            <h2 className="text-xl font-bold border-b pb-2">
              Technical skills
            </h2>
            <div className="flex justify-between">
              <span>
                <h3 className="text-2xl">Turborepo</h3>
                <p>Managing and Structuring single-packages workspaces</p>
              </span>
              <span>Structure</span>
            </div>
            <div className="flex justify-between">
              <span>
                <h3 className="text-2xl">Next.JS</h3>
                <p>Building next gen apps with Next.js + Shadcn + Supabase.</p>
              </span>
              <span>Framework</span>
            </div>
            <div className="flex justify-between">
              <span>
                <h3 className="text-2xl">TailwindCSS + shadcn/ui</h3>
                <p>Most used styling User Interface.</p>
              </span>
              <span>Styling</span>
            </div>
          </section>

          {/* -------- */}
          <section
            id="studies"
            className="flex flex-col gap-4 pl-4 py-4 border-l"
          >
            <h2 className="text-xl font-bold border-b pb-2">Studies</h2>
            <div className="flex justify-between">
              <span>
                <h3 className="text-2xl">Communication Science</h3>
                <p>Bachelor Degree - UNIKOM</p>
              </span>
              <span>
                GPA 3.22 <br />
                2021
              </span>
            </div>
            <div className="flex justify-between">
              <span>
                <h3 className="text-2xl">Computer and Networking</h3>
                <p>High Vocational School - SMKN 1 Soreang.</p>
              </span>
              <span>2016</span>
            </div>
          </section>
          <section
            id="others"
            className="flex flex-col gap-4 pl-4 py-4 border-l"
          >
            <h2 className="text-xl font-bold border-b pb-2">Others</h2>
            <div className="flex justify-between">
              <span>
                <h3 className="text-2xl">Looking for Job</h3>
                <p>seriously</p>
              </span>
              <span>now</span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
