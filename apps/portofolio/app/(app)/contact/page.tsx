"use client";

import { ContactForm } from "@/components/contact-form";
import { useToast } from "@workspace/ui/hooks/use-toast";
export default function ContactPage() {
  const { toast } = useToast();
  return (
    <>
      <section>
        <ContactForm />
      </section>
    </>
  );
}
