import type { Metadata } from "next";
import { PublicUnderDevelopment } from "@/components/public-under-development";

export const metadata: Metadata = {
  title: "Tab 4",
};

export default function Tab4Page() {
  return (
    <PublicUnderDevelopment
      index="04"
      title="Tab 4"
      description="This page is under development. Check back soon."
    />
  );
}
