"use client";

import { upsertCompanyAction } from "@/actions/upsert-company";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { nanoid } from "nanoid";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { z } from "zod";
import UploadLogo from "../upload-logo";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50, {
      message: "Name must be less than 50 characters.",
    }),
  location: z
    .string()
    .max(100, {
      message: "Location must be less than 100 characters.",
    })
    .optional(),
  bio: z
    .string()
    .max(500, {
      message: "Bio must be less than 500 characters.",
    })
    .optional(),
  website: z
    .string()
    .transform((val) => (val === "" ? null : val))
    .pipe(
      z
        .string()
        .url({
          message: "Please enter a valid website URL.",
        })
        .nullable(),
    ),
  social_x_link: z
    .string()
    .transform((val) => (val === "" ? null : val))
    .pipe(
      z
        .string()
        .url({
          message: "Please enter a valid X URL.",
        })
        .nullable(),
    ),
  is_public: z.boolean().default(true),
  slug: z
    .string()
    .min(1, {
      message: "Username is required.",
    })
    .optional(),
  image: z.string().url().nullable(),
});

type CompanyData = {
  id: string;
  name?: string;
  location?: string;
  slug?: string;
  bio?: string;
  website?: string;
  social_x_link?: string;
  public?: boolean;
  image?: string;
};

export function CompanyForm({ data }: { data?: CompanyData }) {
  const { execute, isExecuting } = useAction(upsertCompanyAction);

  const id = data?.id ?? nanoid();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data?.name,
      location: data?.location ?? "",
      bio: data?.bio ?? "",
      website: data?.website ?? "",
      social_x_link: data?.social_x_link ?? "",
      is_public: data?.public ?? true,
      slug: data?.slug,
      image: data?.image ?? null,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    execute({
      id,
      name: data.name,
      location: data.location || null,
      bio: data.bio || null,
      website: data.website || null,
      social_x_link: data.social_x_link || null,
      is_public: data.is_public,
      slug: data.slug ?? undefined,
      image: data.image || null,
    });
  };

  const handleImageUpload = (url: string) => {
    form.setValue("image", url);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <ScrollArea className="h-[450px] pr-4">
          <div className="space-y-6">
            <UploadLogo
              onUpload={handleImageUpload}
              prefix={`company/${id}`}
              image={data?.image}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      {...field}
                      className="placeholder:text-[#878787] border-border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your username"
                      {...field}
                      className="placeholder:text-[#878787] border-border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Company location"
                      {...field}
                      className="placeholder:text-[#878787] border-border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Company bio"
                      {...field}
                      className="placeholder:text-[#878787] border-border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://your-website.com"
                      {...field}
                      type="url"
                      value={field.value || ""}
                      className="placeholder:text-[#878787] border-border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="social_x_link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>X Profile</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://x.com/your-profile"
                      {...field}
                      type="url"
                      value={field.value || ""}
                      className="placeholder:text-[#878787] border-border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="is_public"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between border border-border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-sm">Public Profile</FormLabel>
                    <p className="text-xs text-[#878787]">
                      Make your company visible to everyone
                    </p>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </ScrollArea>

        <Button type="submit" className="w-full" disabled={isExecuting}>
          {isExecuting ? "Saving..." : "Save Company"}
        </Button>
      </form>
    </Form>
  );
}
