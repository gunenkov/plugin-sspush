import { registerPlugin } from '@capacitor/core';
const SsPush = registerPlugin('SsPush', {
    web: () => import('./web').then(m => new m.SsPushWeb()),
});
export * from './definitions';
export { SsPush };
//# sourceMappingURL=index.js.map