import { JobsFeatured } from "@/components/jobs/jobs-featured";
import { JobsList } from "@/components/jobs/jobs-list";

export const metadata = {
  title: "Jobs | Cursor Directory",
  description: "Find your next job with Cursor Directory",
};

export const revalidate = 3600;

export default function Page() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12 mt-24">
      <h1 className="text-xl mb-8">Featured jobs</h1>

      <JobsFeatured />
      <JobsList />
    </div>
  );
}
