"use client";

import { ContactForm } from "@/components/contact-form";
import { Separator } from "@workspace/ui/components/separator";
import { useToast } from "@workspace/ui/hooks/use-toast";
export default function ContactPage() {
  const { toast } = useToast();
  return (
    <>
      <section>
        <ContactForm />
      </section>
      <Separator />
      <section>
        <p>Want make Schedule?</p>
        <iframe
          src="https://cal.com/andrihadiansah/"
          className="w-full h-[calc(100vh+18px)] max-md:h-[50vh] overflow-y-hidden"
        />
      </section>
    </>
  );
}
