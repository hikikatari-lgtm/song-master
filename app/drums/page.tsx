import type { Metadata } from "next";
import InstrumentSongs from "@/components/InstrumentSongs";

export const metadata: Metadata = {
  title: "Drums | Song Master",
};

export default function DrumsPage() {
  return <InstrumentSongs instrument="drums" />;
}
