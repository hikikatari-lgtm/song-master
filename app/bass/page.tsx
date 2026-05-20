import type { Metadata } from "next";
import InstrumentSongs from "@/components/InstrumentSongs";

export const metadata: Metadata = {
  title: "Bass | Song Master",
};

export default function BassPage() {
  return <InstrumentSongs instrument="bass" />;
}
