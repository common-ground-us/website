import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/WorkingBoard/" },
    sitemap: "https://www.common-ground.us/sitemap.xml",
  };
}
