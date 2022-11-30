import * as React from "react";
import PublicationSection from "../components/PublicationSection";

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default function IndexPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button class="bg-sky-500 hover:bg-sky-700">Save changes</button>
      <PublicationSection />
    </div>
  );
}
