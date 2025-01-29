import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

const projects = [
  {
    id: 1,
    title: "Unity Essentials Pathways",
    category: "Game",
    year: 2024,
    tags: ["Learning", "Unity Engine", "3D/2D", "C#"],
    link: "https://play.unity.com/en/games/6e14b625-e63e-43c6-a1c3-e1e29eabb230/unity-essentials-pathways",
    linkLabel: "Play On Dekstop",
    indicator: "bg-green-500",
    description:
      "A project created as part of learning with the Unity Engine, covering both 2D and 3D game development.",
    images: "/images/g1-unity-ep.png",
  },
  {
    id: 2,
    title: "2DPX",
    category: "Web",
    year: 2025,
    tags: ["2D", "Pixelart", "Design"],
    link: "https://2dpx.vercel.app/",
    linkLabel: "On Developing",
    indicator: "bg-red-500",
    description: "A web-based project focused on 2D pixel art and design.",
    images: "/images/w1-2dpx.png",
  },

  // Tambahkan proyek lain jika perlu
];

export default function ProjectPage() {
  return (
    <>
      <section className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="relative w-full pt-[50.5%] border-b">
                <Image
                  src={project.images}
                  alt={project.title}
                  className="aspect-video object-cover object-top rounded-t-xl "
                  fill
                />
              </div>
            </CardHeader>
            <CardContent className="p-0 h-full flex flex-col">
              <CardTitle className="p-2 text-2xl">{project.title} </CardTitle>
              <CardDescription className="flex gap-2 items-center ">
                <span className="flex flex-col border-grid border-t justify-center border-r p-2">
                  <span className="mr-1">{project.category}</span>
                  <span className="mr-1">{project.year}</span>
                </span>
                <p>{project.description}</p>
              </CardDescription>
            </CardContent>
            <CardFooter className="border-t p-2 flex justify-between w-full items-center h-fit">
              <CardDescription className="flex gap-1 items-center flex-wrap mr-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant={"secondary"}>
                    {tag}
                  </Badge>
                ))}
              </CardDescription>
              <Link href={project.link} target="_blank">
                <Button variant="secondary" withIndicator={project.indicator}>
                  {project.linkLabel}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </section>
    </>
  );
}
