import { WebPlugin } from '@capacitor/core';
import type { SsPushPlugin } from './definitions';
export declare class SsPushWeb extends WebPlugin implements SsPushPlugin {
    showDriverBannerNotification(options: {
        sound: boolean;
        vibration: boolean;
        statusBarIcon: boolean;
        vibrationLength: number;
    }): Promise<void>;
    showChemistryBannerNotification(options: {
        sound: boolean;
        vibration: boolean;
        statusBarIcon: boolean;
        vibrationLength: number;
    }): Promise<void>;
    showDriverTasksNotification(options: {
        countOfTasks: number;
        sound: boolean;
        vibration: boolean;
        statusBarIcon: boolean;
        vibrationLength: number;
    }): Promise<void>;
    showChemistryTasksNotification(options: {
        countOfTasks: number;
        sound: boolean;
        vibration: boolean;
        statusBarIcon: boolean;
        vibrationLength: number;
    }): Promise<void>;
    resetBadgeCount(): Promise<void>;
}
