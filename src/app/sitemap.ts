import { MetadataRoute } from "next";

export const dynamic = "force-static";
import { STORES_DATA } from "@/data/storesData";
import { DINING_DATA } from "@/data/diningData";
import { ATTRACTIONS_DATA } from "@/data/attractionsData";
import { EVENTS_DATA } from "@/data/eventsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thegrandatrium.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dine`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/entertain`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/plan`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const storeRoutes: MetadataRoute.Sitemap = STORES_DATA.map((store) => ({
    url: `${baseUrl}/shop/${store.slug}`,
    lastModified: new Date("2026-10-26"),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const diningRoutes: MetadataRoute.Sitemap = DINING_DATA.map((dining) => ({
    url: `${baseUrl}/dine/${dining.slug}`,
    lastModified: new Date("2026-10-26"),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const attractionRoutes: MetadataRoute.Sitemap = ATTRACTIONS_DATA.map((attraction) => ({
    url: `${baseUrl}/entertain/${attraction.slug}`,
    lastModified: new Date("2026-10-26"),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const eventRoutes: MetadataRoute.Sitemap = EVENTS_DATA.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date("2026-10-26"),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...storeRoutes,
    ...diningRoutes,
    ...attractionRoutes,
    ...eventRoutes,
  ];
}
