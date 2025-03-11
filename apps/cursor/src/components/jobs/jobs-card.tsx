import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export interface JobsCardProps {
  title: string;
  location: string;
  description: string;
  created_at: string;
  link: string;
  workplace: string;
  experience: string;
  company: {
    name: string;
    image: string;
    slug: string;
  };
}

export function JobsCard({
  data: { title, company, location, description, link, workplace, experience },
}: {
  data: JobsCardProps;
}) {
  return (
    <Card className="p-0 border-none bg-transparent">
      <CardHeader className="p-0 space-y-2">
        <div className="flex items-center gap-2">
          <Avatar className="size-4 rounded-none">
            {company.image ? (
              <AvatarImage src={company.image} alt={company.name} />
            ) : (
              <AvatarFallback className="bg-accent">
                {company.name.charAt(0)}
              </AvatarFallback>
            )}
          </Avatar>
          <div className="flex flex-row space-x-1">
            <CardTitle className="text-xs text-[#878787] font-mono">
              <Link href={`/c/${company.slug}`}>{company.name}</Link>
            </CardTitle>

            {experience && (
              <>
                <span className="text-xs text-[#878787] font-mono">•</span>
                <span className="line-clamp-1 text-xs text-[#878787] font-mono">
                  {experience}
                </span>
              </>
            )}
            {location && (
              <>
                <span className="text-xs text-[#878787] font-mono">•</span>
                <span className="line-clamp-1 text-xs text-[#878787] font-mono">
                  {location}
                </span>
              </>
            )}

            {workplace && (
              <>
                <span className="text-xs text-[#878787] font-mono">•</span>
                <span className="line-clamp-1 text-xs text-[#878787] font-mono">
                  {workplace}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <CardTitle className="text-md font-normal flex items-center gap-2">
            <span>
              <a
                href={`${link}?utm_source=cursor.directory&utm_medium=jobs`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </a>
            </span>
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="p-0 mt-2 pr-24">
        <p className="text-sm line-clamp-2 text-[#878787]">{description}</p>
      </CardContent>
    </Card>
  );
}
