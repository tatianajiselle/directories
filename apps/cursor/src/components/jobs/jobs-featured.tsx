import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const featuredJobs = [
  {
    id: 1,
    title: "Frontend developer",
    logo: "https://pbs.twimg.com/profile_images/1794806483219337216/9vW73mux_400x400.jpg",
    description: "Building Scalable, Performant, and Accessible Web Interfaces",
    link: "https://go.midday.ai/8cX3F4o",
    experience: 4,
    location: "New York, NY",
    type: "Full-time",
    salary: "100k - 150k",
    workplace: "Hybrid",
    company: {
      name: "Cursor",
      slug: "cursor",
    },
  },
  {
    id: 2,
    title: "Frontend developer",
    logo: "https://pbs.twimg.com/profile_images/1794806483219337216/9vW73mux_400x400.jpg",
    description: "Building Scalable, Performant, and Accessible Web Interfaces",
    link: "https://go.midday.ai/8cX3F4o",
    experience: 4,
    location: "New York, NY",
    type: "Full-time",
    salary: "100k - 150k",
    workplace: "Hybrid",
    company: {
      name: "Cursor",
      slug: "cursor",
    },
  },
  {
    id: 3,
    title: "Frontend developer",
    logo: "https://pbs.twimg.com/profile_images/1794806483219337216/9vW73mux_400x400.jpg",
    description: "Building Scalable, Performant, and Accessible Web Interfaces",
    link: "https://go.midday.ai/8cX3F4o",
    experience: 4,
    location: "New York, NY",
    type: "Full-time",
    salary: "100k - 150k",
    workplace: "Hybrid",
    company: {
      name: "Cursor",
      slug: "cursor",
    },
  },
  {
    id: 4,
    title: "Frontend developer",
    logo: "https://pbs.twimg.com/profile_images/1794806483219337216/9vW73mux_400x400.jpg",
    description: "Building Scalable, Performant, and Accessible Web Interfaces",
    link: "https://go.midday.ai/8cX3F4o",
    experience: 4,
    location: "New York, NY",
    type: "Full-time",
    salary: "100k - 150k",
    workplace: "Hybrid",
    company: {
      name: "Cursor",
      slug: "cursor",
    },
  },
  {
    id: 5,
    title: "Frontend developer",
    logo: "https://pbs.twimg.com/profile_images/1794806483219337216/9vW73mux_400x400.jpg",
    description: "Building Scalable, Performant, and Accessible Web Interfaces",
    link: "https://go.midday.ai/8cX3F4o",
    experience: 4,
    location: "New York, NY",
    type: "Full-time",
    salary: "100k - 150k",
    workplace: "Hybrid",
    company: {
      name: "Cursor",
      slug: "cursor",
    },
  },
  {
    id: 6,
    title: "Frontend developer",
    logo: "https://pbs.twimg.com/profile_images/1794806483219337216/9vW73mux_400x400.jpg",
    description: "Building Scalable, Performant, and Accessible Web Interfaces",
    link: "https://go.midday.ai/8cX3F4o",
    experience: 4,
    location: "New York, NY",
    type: "Full-time",
    salary: "100k - 150k",
    workplace: "Hybrid",
    company: {
      name: "Cursor",
      slug: "cursor",
    },
  },
  {
    id: 7,
    title: "Frontend developer",
    logo: "https://pbs.twimg.com/profile_images/1794806483219337216/9vW73mux_400x400.jpg",
    description: "Building Scalable, Performant, and Accessible Web Interfaces",
    link: "https://go.midday.ai/8cX3F4o",
    experience: 4,
    location: "New York, NY",
    type: "Full-time",
    salary: "100k - 150k",
    workplace: "Hybrid",
    company: {
      name: "Cursor",
      slug: "cursor",
    },
  },
  {
    id: 8,
    title: "Frontend developer",
    logo: "https://pbs.twimg.com/profile_images/1794806483219337216/9vW73mux_400x400.jpg",
    description: "Building Scalable, Performant, and Accessible Web Interfaces",
    link: "https://go.midday.ai/8cX3F4o",
    experience: 4,
    location: "New York, NY",
    type: "Full-time",
    salary: "100k - 150k",
    workplace: "Hybrid",
    company: {
      name: "Cursor",
      slug: "cursor",
    },
  },
];

export function JobsFeatured() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full relative"
    >
      <div className="absolute -top-10 right-0 flex gap-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <CarouselContent>
        {featuredJobs.map((job) => (
          <CarouselItem key={job.id} className="md:basis-1/2 lg:basis-1/4">
            <Card className="bg-[#111111] text-white">
              <CardContent className="flex flex-col gap-4 p-4">
                <div className="flex items-center gap-3">
                  <Link href={`/c/${job.company.slug}`}>
                    <div className="relative h-12 w-12">
                      <Image
                        src={job.logo}
                        alt={`${job.company.name} logo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#878787] font-mono line-clamp-1">
                      <Link href={`/c/${job.company.slug}`}>
                        <span className="line-clamp-1">{job.company.name}</span>
                      </Link>
                      {job.workplace && (
                        <>
                          <span>•</span>
                          <span>{job.workplace}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-md">{job.title}</h3>
                  </div>
                </div>
                <p className="text-[#878787] text-sm">{job.description}</p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-fit bg-[#1c1c1c] text-[#878787] hover:bg-[#2c2c2c] rounded-full font-mono text-xs"
                  asChild
                >
                  <a
                    href={`${job.link}?utm_source=cursor.directory&utm_medium=referral&utm_campaign=jobs-featured`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply
                  </a>
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
