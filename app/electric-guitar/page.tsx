import type { Metadata } from "next";
import InstrumentSongs from "@/components/InstrumentSongs";

export const metadata: Metadata = {
  title: "Electric Guitar | Song Master",
};

export default function ElectricGuitarPage() {
  return <InstrumentSongs instrument="electric-guitar" />;
}
