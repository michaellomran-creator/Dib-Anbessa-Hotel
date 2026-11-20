import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dibanbessahotel.com";

  const routes = [
    "",
    "/about",
    "/rooms",
    "/dining",
    "/facilities",
    "/gallery",
    "/explore-bahir-dar",
    "/reviews",
    "/contact",
    "/book",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2026-11-20T12:00:00.000Z",
    changeFrequency: route === "" || route === "/reviews" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/rooms" || route === "/book" ? 0.9 : 0.8,
  }));
}
