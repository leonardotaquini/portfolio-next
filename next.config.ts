import createNextIntlPlugin from 'next-intl/plugin';
import { devIndicatorServerState } from 'next/dist/server/dev/dev-indicator-server-state';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
  reactStrictMode: true,
devIndicatorServerState:false
};

export default withNextIntl(nextConfig);
