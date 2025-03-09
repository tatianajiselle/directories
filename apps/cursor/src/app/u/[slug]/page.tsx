import { Profile } from "@/components/profile";

type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;

  return <Profile userId={slug} />;
}
