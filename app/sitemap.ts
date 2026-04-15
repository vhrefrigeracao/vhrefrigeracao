import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.vhrefrigeracao.com.br/",
      lastModified: new Date("2026-04-14T18:08:14+00:00"),
      priority: 1.0,
    },
    {
      url: "https://www.vhrefrigeracao.com.br/servicos/ar-condicionado",
      lastModified: new Date("2026-04-14T18:08:14+00:00"),
      priority: 0.8,
    },
    {
      url: "https://www.vhrefrigeracao.com.br/servicos/manutencao-freezer",
      lastModified: new Date("2026-04-14T18:08:14+00:00"),
      priority: 0.8,
    },
    {
      url: "https://www.vhrefrigeracao.com.br/servicos/manutencao-geladeira",
      lastModified: new Date("2026-04-14T18:08:14+00:00"),
      priority: 0.8,
    },
    {
      url: "https://www.vhrefrigeracao.com.br/servicos/manutencao-maquina-de-lavar",
      lastModified: new Date("2026-04-14T18:08:14+00:00"),
      priority: 0.8,
    },
    {
      url: "https://www.vhrefrigeracao.com.br/termos-de-uso",
      lastModified: new Date("2026-04-14T18:08:14+00:00"),
      priority: 0.8,
    },
  ];
}
