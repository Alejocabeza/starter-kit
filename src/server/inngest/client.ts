import { EventSchemas, Inngest } from "inngest";

type Events = {
  "test/hello-world": {
    name: "test/hello-world";
    data: {
      userId: string;
      email: string;
    };
  };
};

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "starter-kit-ts",
  schemas: new EventSchemas<Events>(),
});
