import type { Metadata } from "next";
import { TrackPageLayout } from "@/components/track-page-layout";
import { tracks } from "@/lib/tracks";

const track = tracks.product;

export const metadata: Metadata = {
  title: track.metaTitle,
  description: track.metaDescription,
  alternates: { canonical: "https://aaqibabdullah.com/product" },
};

export default function ProductPage() {
  return <TrackPageLayout track={track} />;
}
