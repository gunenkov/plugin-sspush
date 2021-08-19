import { registerPlugin } from '@capacitor/core';

import type { SsPushPlugin } from './definitions';

const SsPush = registerPlugin<SsPushPlugin>('SsPush', {
  web: () => import('./web').then(m => new m.SsPushWeb()),
});

export * from './definitions';
export { SsPush };
