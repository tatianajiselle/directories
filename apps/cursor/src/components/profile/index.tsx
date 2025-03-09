import { getUserProfile } from "@/data/queries";
import { ProfileHeader } from "./profile-header";

export async function Profile({ userId }: { userId: string }) {
  const { data } = await getUserProfile("4ac03681-e30d-41df-8486-b89da5dff13c");

  console.log(data);

  return (
    <div>
      <ProfileHeader />
    </div>
  );
}
