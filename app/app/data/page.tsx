import type { Metadata } from "next";
import { TrackPageLayout } from "@/components/track-page-layout";
import { tracks } from "@/lib/tracks";

const track = tracks.data;

export const metadata: Metadata = {
  title: track.metaTitle,
  description: track.metaDescription,
  alternates: { canonical: "https://aaqibabdullah.com/data" },
};

export default function DataPage() {
  return <TrackPageLayout track={track} />;
}
