import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ignaciokoestner.app',
  appName: 'shell-mobile',
  webDir: '../../dist/apps/shell-mobile/browser',
  server: {
    url: 'http://192.168.69.20:8101',
    cleartext: true,
  },
};

export default config;
