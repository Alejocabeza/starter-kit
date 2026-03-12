import { inngest } from "@/server/inngest/client";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const usersRouter = createTRPCRouter({
  create: publicProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello-world",
      data: { userId: "123", email: "ejemplo@correo.com" },
    });

    return { success: true };
  }),
});
