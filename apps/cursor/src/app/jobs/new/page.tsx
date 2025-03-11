import { GithubSignin } from "@/components/github-signin";
import { GoogleSignin } from "@/components/google-signin";
import { getSession } from "@/utils/supabase/auth";

export default async function JobsNew() {
  const session = await getSession();

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 w-full max-w-sm mx-auto">
        <div className="max-w-md w-full text-center -mt-32">
          <p className="text-md mt-4">
            Sign in to post a job listing <br />
            and reach 220k+ developers today.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <GithubSignin redirectTo="/jobs/new" />
              <GoogleSignin redirectTo="/jobs/new" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 mt-10 max-w-screen-sm xl:max-w-screen-md border-t border-border pt-10">
      <h1 className="text-2xl font-bold">Create a new job listing</h1>
    </div>
  );
}
