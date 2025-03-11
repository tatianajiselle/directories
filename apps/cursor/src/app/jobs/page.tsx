import { JobsFeatured } from "@/components/jobs/jobs-featured";
import { JobsList } from "@/components/jobs/jobs-list";

export const metadata = {
  title: "Jobs | Cursor Directory",
  description: "Find your next job with Cursor Directory",
};

const jobs = [
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
  {
    id: 9,
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
    id: 10,
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
    id: 11,
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

export default function Page() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12 mt-24">
      <h1 className="text-xl mb-8">Featured jobs</h1>
      <JobsFeatured />
      <JobsList data={jobs} />
    </div>
  );
}
