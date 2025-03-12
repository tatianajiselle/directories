import { JobsFeatured } from "@/components/jobs/jobs-featured";
import { JobsList } from "@/components/jobs/jobs-list";
import { getFeaturedJobs } from "@/data/queries";
import Link from "next/link";

export const metadata = {
  title: "Jobs | Cursor Directory",
  description: "Find your next job with Cursor Directory",
};

export const revalidate = 3600;

export default async function Page() {
  const { data: featuredJobs } = await getFeaturedJobs();

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12 mt-24">
      <h1 className="text-xl mb-2">Featured Jobs</h1>
      <p className="text-sm text-[#878787] mb-8">
        Browse positions or{" "}
        <Link href="/jobs/new" className="border-b border-border border-dashed">
          post a job to reach 220,000+ developers
        </Link>
        . Remote, hybrid and on-site opportunities available.
      </p>

      <JobsFeatured data={featuredJobs} />
      <JobsList />
    </div>
  );
}
