import type { Metadata } from "next";
import { PublicUnderDevelopment } from "@/components/public-under-development";

export const metadata: Metadata = {
  title: "Tab 5",
};

export default function Tab5Page() {
  return (
    <PublicUnderDevelopment
      index="05"
      title="Tab 5"
      description="This page is under development. Check back soon."
    />
  );
}
