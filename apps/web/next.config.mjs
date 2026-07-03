/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  transpilePackages: ["@dedsec/domain", "@dedsec/i18n", "@dedsec/ui"]
};

export default nextConfig;
