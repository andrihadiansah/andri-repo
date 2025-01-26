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
      <section
        className="grid grid-cols-[auto_1fr]
      gap-8 max-md:gap-4"
      >
        {/* Avatar */}
        <div className="flex justify-center md:justify-start row-span-2  	">
          <Avatar className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] grayscale">
            <AvatarImage src="https://github.com/andrihadiansah.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        {/* Nama dan Alamat */}
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
        {/* Blockquote */}
        <div className="max-md:col-span-2 h-full items-start flex">
          <div className="">
            <blockquote className="border-l-2 pl-3 text-pretty sm:text-lg justify-center max-md:col-span-2">
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
      </section>
    </>
  );
}
