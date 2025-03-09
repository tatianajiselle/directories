"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { authActionClient } from "./safe-action";

export const editProfileAction = authActionClient
  .metadata({
    actionName: "edit-profile",
  })
  .schema(
    z.object({
      name: z.string(),
      status: z.string().nullable(),
      bio: z.string().nullable(),
      work: z.string().nullable(),
      website: z.string().nullable(),
      social_x_link: z.string().nullable(),
      is_public: z.boolean(),
    }),
  )
  .action(
    async ({
      parsedInput: {
        name,
        status,
        bio,
        work,
        website,
        social_x_link,
        is_public,
      },
      ctx: { userId },
    }) => {
      const supabase = await createClient();

      const { data, error } = await supabase
        .from("users")
        .update({
          name,
          status,
          bio,
          work,
          website,
          social_x_link,
          public: is_public,
        })
        .eq("id", userId);

      if (error) {
        throw new Error(error.message);
      }

      revalidatePath(`/u/${userId}`);

      return data;
    },
  );
