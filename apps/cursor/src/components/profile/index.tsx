import { getUserProfile } from "@/data/queries";
import { ProfileHeader } from "./profile-header";

export async function Profile({ userId }: { userId: string }) {
  const { data } = await getUserProfile(userId);

  return (
    <div>
      <ProfileHeader />
    </div>
  );
}
