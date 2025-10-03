import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ignaciokoestner.app',
  appName: 'shell-mobile',
  webDir: '../../dist/apps/shell-mobile/browser',
  server: { cleartext: true, androidScheme: 'http', allowNavigation: ['10.0.2.2'] },
};

export default config;
