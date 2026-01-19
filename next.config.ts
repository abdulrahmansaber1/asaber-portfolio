import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  reactCompiler: true,
}

const withNextIntl = createNextIntlPlugin("./src/lib/i18n.ts")

export default withNextIntl(nextConfig)
