/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://ocimplantoralsurgery.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  exclude: [],
};

module.exports = config;
