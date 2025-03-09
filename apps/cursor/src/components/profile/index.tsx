import { getUserProfile } from "@/data/queries";
import { getSession } from "@/utils/supabase/auth";
import { format } from "date-fns";
import { BoardPost } from "../board/board-post";
import { ProfileContent } from "./profile-content";
import { ProfileHeader } from "./profile-header";

export async function Profile({
  slug,
  isProfilePage = false,
}: {
  slug: string;
  isProfilePage?: boolean;
}) {
  const session = await getSession();
  const { data } = await getUserProfile(
    slug,
    isProfilePage ? session?.user?.id : undefined,
  );

  const isOwner = session?.user?.id === data?.id;

  if (!data) {
    return (
      <div className="flex justify-center items-center -mt-28 w-full h-screen text-sm text-[#878787]">
        User not found
      </div>
    );
  }

  return (
    <div className="w-full">
      <ProfileHeader
        image={data?.image}
        name={data?.name}
        status={data?.status}
        isOwner={isOwner}
        bio={data?.bio}
        work={data?.work}
        website={data?.website}
        social_x_link={data?.social_x_link}
        is_public={data?.public}
      />

      <ProfileContent
        bio={data?.bio}
        work={data?.work}
        website={data?.website}
        social_x_link={data?.social_x_link}
      />

      <div className="my-14 space-y-10 w-full">
        {data?.posts?.map((post) => (
          // @ts-ignore
          <BoardPost key={post.id} {...post} />
        ))}

        <div className="text-sm text-[#878787] flex justify-between items-center border-t border-border pt-6">
          <span>Joined Cursor Directory</span>
          {format(new Date(data?.created_at), "MMM d, yyyy")}
        </div>
      </div>
    </div>
  );
}
