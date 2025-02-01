"use client";
import { Button } from "@workspace/ui/components/button";
import { useToast } from "@workspace/ui/hooks/use-toast";
export default function ContactPage() {
  const { toast } = useToast();
  return (
    <>
      <section>
        <Button
          onClick={() => {
            toast({ title: "Awww", description: "upps" });
          }}
        ></Button>
      </section>
      
    </>
  );
}
