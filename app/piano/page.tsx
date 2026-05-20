import type { Metadata } from "next";
import InstrumentSongs from "@/components/InstrumentSongs";

export const metadata: Metadata = {
  title: "Piano | Song Master",
};

export default function PianoPage() {
  return <InstrumentSongs instrument="piano" />;
}
