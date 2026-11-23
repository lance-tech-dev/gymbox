import type { Metadata } from "next";
import { PublicUnderDevelopment } from "@/components/public-under-development";

export const metadata: Metadata = {
  title: "Tab 2",
};

export default function Tab2Page() {
  return (
    <PublicUnderDevelopment
      index="02"
      title="Tab 2"
      description="This page is under development. Check back soon."
    />
  );
}
