import { WebPlugin } from '@capacitor/core';
import type { SsPushPlugin } from './definitions';
export declare class SsPushWeb extends WebPlugin implements SsPushPlugin {
    showBannerNotification(options: {
        sound: boolean;
        vibration: boolean;
        statusBarIcon: boolean;
        vibrationLength: number;
    }): Promise<void>;
    showTasksNotification(options: {
        countOfTasks: number;
        sound: boolean;
        vibration: boolean;
        statusBarIcon: boolean;
        vibrationLength: number;
    }): Promise<void>;
    resetBadgeCount(): Promise<void>;
}
