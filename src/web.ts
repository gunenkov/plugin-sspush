import { WebPlugin } from '@capacitor/core';

import type { SsPushPlugin } from './definitions';

export class SsPushWeb extends WebPlugin implements SsPushPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async showBannerNotification(options: { sound: boolean; vibration: boolean,
    statusBarIcon: boolean, vibrationLength: number }): Promise<void> {
    console.log("Плагин не реализован для Web. Используйте ОС Android");
    console.log(options);
  }

  async showTasksNotification(options: { countOfTasks: number; sound: boolean; vibration: boolean,
    statusBarIcon: boolean, vibrationLength: number }): Promise<void> {
    console.log("Плагин не реализован для Web. Используйте ОС Android");
    console.log(options);
  }

  async resetBadgeCount(): Promise<void> {
    console.log("Плагин не реализован для Web. Используйте ОС Android");
  }
}
