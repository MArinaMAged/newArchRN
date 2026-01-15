import type { TurboModule } from 'react-native';
import { Platform, TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  openDisplayOverApps(callback: (result: boolean | string) => void): void;
  isDisplayOverAppsGranted(): Promise<'granted' | 'denied'>;
}

const OpenDisplayOverApps: Spec | null =
  Platform.OS === 'android'
    ? TurboModuleRegistry.getEnforcing<Spec>('OpenDisplayOverApps')
    : null;

export default OpenDisplayOverApps;