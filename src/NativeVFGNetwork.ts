import { TurboModule, TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  hello(method: string): Promise<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('VFGNetwork');
