/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US", "fr", "nl-NL"],
    defaultLocale: "en-US",
    domains: [
      {
        domain: "example.com",
        defaultLocale: "en-US",
      },
      {
        domain: "example.nl",
        defaultLocale: "nl-NL",
      },
      {
        domain: "example.fr",
        defaultLocale: "fr",
        http: true,
      },
    ],
  },
}

export default nextConfig
