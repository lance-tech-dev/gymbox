import type { Metadata } from "next";
import { PublicUnderDevelopment } from "@/components/public-under-development";

export const metadata: Metadata = {
  title: "Tab 3",
};

export default function Tab3Page() {
  return (
    <PublicUnderDevelopment
      index="03"
      title="Tab 3"
      description="This page is under development. Check back soon."
    />
  );
}
