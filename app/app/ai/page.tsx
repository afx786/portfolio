import type { Metadata } from "next";
import { TrackPageLayout } from "@/components/track-page-layout";
import { tracks } from "@/lib/tracks";

const track = tracks.ai;

export const metadata: Metadata = {
  title: track.metaTitle,
  description: track.metaDescription,
  alternates: { canonical: "https://aaqibabdullah.com/ai" },
};

export default function AIPage() {
  return <TrackPageLayout track={track} />;
}
