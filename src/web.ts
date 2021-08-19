import { WebPlugin } from '@capacitor/core';

import type { SsPushPlugin } from './definitions';

export class SsPushWeb extends WebPlugin implements SsPushPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
