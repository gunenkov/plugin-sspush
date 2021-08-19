export interface SsPushPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    showBannerNotification(options: {
        sound: boolean;
        vibration: boolean;
        vibrationLength: number;
        statusBarIcon: boolean;
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
