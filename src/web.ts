import { WebPlugin } from '@capacitor/core';

import type { SsPushPlugin } from './definitions';

export class SsPushWeb extends WebPlugin implements SsPushPlugin {

  async showDriverBannerNotification(options: {
    sound: boolean; vibration: boolean,
    statusBarIcon: boolean, vibrationLength: number
  }): Promise<void> {
    console.log('Плагин не реализован для Web. Используйте ОС Android');
    console.log(options);
  }

  async showChemistryBannerNotification(options: {
    sound: boolean; vibration: boolean,
    statusBarIcon: boolean, vibrationLength: number
  }): Promise<void> {
    console.log('Плагин не реализован для Web. Используйте ОС Android');
    console.log(options);
  }

  async showDriverTasksNotification(options: {
    countOfTasks: number; sound: boolean; vibration: boolean,
    statusBarIcon: boolean, vibrationLength: number
  }): Promise<void> {
    console.log('Плагин не реализован для Web. Используйте ОС Android');
    console.log(options);
  }

  async showChemistryTasksNotification(options: {
    countOfTasks: number; sound: boolean; vibration: boolean,
    statusBarIcon: boolean, vibrationLength: number
  }): Promise<void> {
    console.log('Плагин не реализован для Web. Используйте ОС Android');
    console.log(options);
  }

  async resetBadgeCount(): Promise<void> {
    console.log('Плагин не реализован для Web. Используйте ОС Android');
  }
}
