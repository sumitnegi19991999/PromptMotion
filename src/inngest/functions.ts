import {   openai, createAgent } from "@inngest/agent-kit";


import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
     // Create a new agent with a system prompt (you can add optional tools, too)
     const manimAgent = createAgent({
        name: "manim-agent",
        system: "You are an expert Python developer who writes code to create animation using manim library. you write simple mantanable code that create smooth and perfect animation using manin library.you write manim code ",
        model: openai({ model: "gpt-4o" }),
      }); 
    // await step.sleep("wait-a-moment", "5s");
    const { output } = await manimAgent.run(
        `Write the following code : ${event.data.value}`,
      );
      console.log(output);
      // [{ role: 'assistant', content: 'function removeUnecessaryWhitespace(...' }]
    return {  output };
  },
);
