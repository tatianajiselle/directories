import { getCompanyProfile } from "@/data/queries";
import { getSession } from "@/utils/supabase/auth";
import { format } from "date-fns";
import { CompanyContent } from "./company-content";
import { CompanyHeader } from "./company-header";

export async function Company({
  slug,
  isProfilePage = false,
}: {
  slug: string;
  isProfilePage?: boolean;
}) {
  const session = await getSession();
  const { data } = await getCompanyProfile(slug, session?.user?.id);

  const isOwner = session?.user?.id === data?.owner_id;

  if (!data) {
    return (
      <div className="flex justify-center items-center -mt-28 w-full h-screen text-sm text-[#878787]">
        User not found
      </div>
    );
  }

  return (
    <div className="w-full">
      <CompanyHeader
        id={data?.id}
        image={data?.image}
        name={data?.name}
        location={data?.location}
        isOwner={isOwner}
        bio={data?.bio}
        website={data?.website}
        social_x_link={data?.social_x_link}
        is_public={data?.public}
        slug={data?.slug}
      />

      <CompanyContent
        bio={data?.bio}
        website={data?.website}
        social_x_link={data?.social_x_link}
      />

      <div className="my-14 space-y-10 w-full">
        {/* {data?.posts?.map((post) => (
          // @ts-ignore
          <BoardPost key={post.id} {...post} />
        ))} */}

        <div className="text-sm text-[#878787] flex justify-between items-center border-t border-border pt-6">
          <span>Joined Cursor Directory</span>
          {format(new Date(data?.created_at), "MMM d, yyyy")}
        </div>
      </div>
    </div>
  );
}
