"use client";

import { useState } from "react";
import { cn } from "@workspace/ui/lib/utils";
import { Slider } from "@workspace/ui/components/slider";

const timelineData = [
  { year: "1998", title: "I was born" },
  { year: "2004", title: "Started school" },
  { year: "2016", title: "Graduated Vocational High School" },
  {
    year: "2021",
    title: "Graduated University of Computer Indonesian (UNIKOM)",
  },
  {
    year: "2021",
    title: "Got married",
  },
  {
    year: "2022",
    title: "Started Learning Web Development",
  },
  {
    year: "2023",
    title: "Work as a Teacher Computer Networking",
  },
  {
    year: "2024",
    title: "Work as a Salesman Cars at Suzuki NJS",
  },

  { year: "Present", title: "Currently building 2DPX" },
  { year: "Future", title: "" },
];

function TimelineStory({
  className,
  ...props
}: {
  className?: string;
  props?: any;
}) {
  const [step, setStep] = useState<number>(0);

  const handleSliderChange = (value: number[]) => {
    let stepValue = value[0]; // Gunakan `let` untuk nilai sementara
    if (stepValue === undefined) stepValue = 0; // Validasi nilai untuk menghindari undefined
    const finalStep = stepValue; // Finalisasi nilai, ubah ke `const`
    setStep(finalStep); // Menggunakan nilai final untuk state
  };

  // Ambil data dari timeline berdasarkan langkah
  let currentData = timelineData[step]; // Gunakan `let` karena ada kemungkinan data tidak ditemukan
  if (!currentData) {
    currentData = { year: "Unknown", title: "Unknown" }; // Tetapkan default jika data tidak ditemukan
  }
  const finalData = currentData; // Finalisasi nilai, ubah ke `const`

  return (
    <section className={cn("flex flex-col gap-2", className)} {...props}>
      <div className="border pt-3 px-3 pb-8 rounded-2xl aspect-video relative w-full">
        <div className="static top-0 h-full w-full z-10 rounded-xl bg-secondary">
          <div className="absolute top-8 flex flex-col items-center justify-center mx-auto w-[calc(100%-2rem)] font-bold text-lg">
            <h2 className="px-2 text-center">{finalData.title}</h2>
          </div>
        </div>

        <div className="relative max-md:w-[80%] w-[86%] mx-auto">
          <div
            className="absolute bottom-2 flex items-center text-primary justify-center rounded-full max-md:text-xs max-lg:text-sm transition-all duration-500 ease-in-out"
            style={{
              left: `calc(${(step / (timelineData.length - 1)) * 100}% - 1.5rem)`, // Posisi horizontal mengikuti slider
            }}
          >
            {finalData.year}
          </div>
        </div>
        <div className="flex justify-center h-8">
          <Slider
            defaultValue={[0]}
            max={timelineData.length - 1}
            step={1}
            onValueChange={handleSliderChange}
            className="relative w-[90%]"
          />
        </div>
      </div>
    </section>
  );
}

export { TimelineStory };
