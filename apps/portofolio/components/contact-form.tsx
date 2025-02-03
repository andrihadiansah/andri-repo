"use client";

import { zodResolver } from "@workspace/ui/hookform-resolvers-zod";
import { useForm } from "@workspace/ui/react-hook-form";
import { z } from "@workspace/ui/zod";
import { CalendarIcon, Clock } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Textarea } from "@workspace/ui/components/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { toast } from "@workspace/ui/hooks/use-toast";
import { cn } from "@workspace/ui/lib/utils";
import { Calendar } from "@workspace/ui/components/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";

const formSchema = z.object({
  fullname: z
    .string()
    .min(5, { message: "Full name must be at least 5 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  dateTime: z.object({
    date: z.date({ required_error: "Please select a date." }),
    time: z.object({
      hour: z.string(),
      minute: z.string(),
    }),
  }),
  timezone: z.string().default("UTC"),
  phoneNumber: z
    .object({
      countryCode: z.string().optional(),
      number: z.string().optional().or(z.literal("")),
    })
    .optional(),
});

const countryCodes = [
  { value: "+1", label: "US(+1)" },
  { value: "+44", label: "UK(+44)" },
  { value: "+62", label: "ID(+62)" },
  { value: "+81", label: "JP(+81)" },
  { value: "+91", label: "IN(+91)" },
  { value: "+61", label: "AU(+61)" },
  { value: "+49", label: "DE(+49)" },
  { value: "+33", label: "FR(+33)" },
  { value: "+34", label: "ES(+34)" },
  { value: "+55", label: "BR(+55)" },
  { value: "+65", label: "SG(+65)" },
  { value: "+46", label: "SE(+46)" },
  { value: "+64", label: "NZ(+64)" },
  { value: "+86", label: "CN(+86)" },
  { value: "+52", label: "MX(+52)" },
  { value: "+7", label: "RU(+7)" },
  { value: "+31", label: "NL(+31)" },
  { value: "+63", label: "PH(+63)" },
  { value: "+27", label: "ZA(+27)" },
];

const timezones = [
  { value: "UTC", label: "UTC (Coordinated Universal Time)" },
  { value: "GMT", label: "GMT (Greenwich Mean Time)" },
  { value: "EST", label: "EST (Eastern Standard Time)" },
  { value: "CST", label: "CST (Central Standard Time)" },
  { value: "PST", label: "PST (Pacific Standard Time)" },
  { value: "WIB", label: "WIB (Western Indonesia Time)" },
  { value: "WITA", label: "WITA (Central Indonesia Time)" },
  { value: "WIT", label: "WIT (Eastern Indonesia Time)" },
];

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function formatTime(hour: string, minute: string): string {
  return `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`;
}

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
      dateTime: {
        date: new Date(),
        time: { hour: "08", minute: "00" },
      },
      timezone: "WIB",
      phoneNumber: undefined, // <-- Tidak diisi agar opsional
    },
  });
  // WhatsApp
  function onSubmit(data: z.infer<typeof formSchema>) {
    const { dateTime, timezone, fullname, email, message, phoneNumber } = data;
    const phoneNumberToSend = "6285155318841";
    const formattedDateTime = `${formatTime(dateTime.time.hour, dateTime.time.minute)}, ${formatDate(dateTime.date)} (${timezone})`;

    const text = `
      *New Contact Form Submission:*
      - Full Name: ${fullname}
      - Email: ${email}
      - Date and Time: ${formattedDateTime}
      - Phone Number: ${phoneNumber ? `${phoneNumber.countryCode} ${phoneNumber.number}` : "N/A"}
      - Message: ${message}
    `;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumberToSend}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Form Submitted Successfully!",
      description: "Your message has been sent via WhatsApp.",
    });

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <div className="flex flex-col md:flex-row md:space-x-4 ">
          <div className="flex-1 space-y-8">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your message here"
                        value={field.value}
                        onChange={field.onChange}
                        className="field-sizing-content"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <div className="md:w-fit max-md:mt-8 space-y-8">
            <FormField
              control={form.control}
              name="dateTime"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Pick a Time and Date</FormLabel>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 ">
                      <FormField
                        control={form.control}
                        name="dateTime.time"
                        render={({ field: timeField }) => (
                          <div className="flex items-center space-x-2 w-full">
                            <Select
                              onValueChange={(value) =>
                                timeField.onChange({
                                  ...timeField.value,
                                  hour: value,
                                })
                              }
                              value={timeField.value.hour}
                            >
                              <FormControl className="px-2">
                                <SelectTrigger className="w-fit">
                                  <SelectValue placeholder="Hour" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="h-[200px]">
                                {Array.from(
                                  { length: 18 },
                                  (_, i) => (i + 8) % 24
                                ).map((hour) => (
                                  <SelectItem
                                    key={hour}
                                    value={hour.toString().padStart(2, "0")}
                                  >
                                    {hour.toString().padStart(2, "0")}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <span>:</span>
                            <Select
                              onValueChange={(value) =>
                                timeField.onChange({
                                  ...timeField.value,
                                  minute: value,
                                })
                              }
                              value={timeField.value.minute}
                            >
                              <FormControl className="px-2">
                                <SelectTrigger className="w-fit">
                                  <SelectValue placeholder="Minute" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="h-[200px]">
                                {Array.from(
                                  { length: 12 },
                                  (_, i) => i * 5
                                ).map((minute) => (
                                  <SelectItem
                                    key={minute}
                                    value={minute.toString().padStart(2, "0")}
                                  >
                                    {minute.toString().padStart(2, "0")}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <Clock className="h-4 w-4 opacity-50" />
                          </div>
                        )}
                      />
                    </div>
                    <div className="flex-1">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value.date && "text-muted-foreground"
                              )}
                            >
                              {field.value.date ? (
                                formatDate(field.value.date)
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-fit p-0" align="start">
                          <Calendar
                            mode="single"
                            disabled={{ before: new Date() }}
                            selected={field.value.date}
                            onSelect={(date) =>
                              field.onChange({ ...field.value, date })
                            }
                            autoFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timezone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Zone</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Time Zone" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {timezones.map((tz) => (
                        <SelectItem key={tz.value} value={tz.value}>
                          {tz.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={() => (
                <FormItem>
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <div className="flex space-x-2">
                    <FormField
                      control={form.control}
                      name="phoneNumber.countryCode"
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-[100px]">
                              <SelectValue placeholder="Code" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="h-[150px]">
                            {countryCodes.map((code) => (
                              <SelectItem key={code.value} value={code.value}>
                                {code.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phoneNumber.number"
                      render={({ field }) => (
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Phone number"
                            {...field}
                          />
                        </FormControl>
                      )}
                    />
                  </div>
                  <FormDescription>
                    Enter your phone number with country code.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Chat Via WhatsApp</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
