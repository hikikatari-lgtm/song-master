import type { Metadata } from "next";
import InstrumentSongs from "@/components/InstrumentSongs";

export const metadata: Metadata = {
  title: "Acoustic Guitar | Song Master",
};

export default function AcousticGuitarPage() {
  return <InstrumentSongs instrument="acoustic-guitar" />;
}
