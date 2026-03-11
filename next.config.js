import "./src/env.js";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin('./src/app/shared/i18n/request.ts');

export default withNextIntl(nextConfig);
