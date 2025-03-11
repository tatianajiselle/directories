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
import { getFeaturedJobs } from "@/data/queries";
import Image from "next/image";
import Link from "next/link";

export async function JobsFeatured() {
  const { data: featuredJobs } = await getFeaturedJobs();

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
        {featuredJobs?.map((job) => (
          <CarouselItem key={job.id} className="md:basis-1/2 lg:basis-1/4">
            <Card className="bg-transparent">
              <CardContent className="flex flex-col gap-4 p-4">
                <div className="flex items-center gap-3">
                  <Link href={`/c/${job.company.slug}`}>
                    <div className="relative h-12 w-12">
                      <Image
                        src={job.company.image}
                        alt={`${job.company.name} logo`}
                        fill
                        className="object-cover border border-border"
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
                          <span className="line-clamp-1">{job.workplace}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-md line-clamp-1">{job.title}</h3>
                  </div>
                </div>
                <p className="text-[#878787] text-sm line-clamp-2">
                  {job.description}
                </p>
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
                    View
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
