export interface SsPushPlugin {
    /**
     * Метод запускает нативный ForegroundService.
     * Вызывает локальное пуш-уведомление (ID=1) с баннером, которое остается активным даже после закрытия приложения.
     * При нажатии на баннер открывается нативная MainActivity.
     */
    showBannerNotification(options: {
        sound: boolean;
        vibration: boolean;
        vibrationLength: number;
        statusBarIcon: boolean;
    }): Promise<void>;
    /**
     * Метод вызывает локальное пуш-уведомление (ID=2) с количеством задач.
     * При нажатии на уведомление открывается нативная MainActivity.
     */
    showTasksNotification(options: {
        countOfTasks: number;
        sound: boolean;
        vibration: boolean;
        statusBarIcon: boolean;
        vibrationLength: number;
    }): Promise<void>;
    /**
     * Метод удаляет все уведомления за исключением баннера и сбрасывает счетчик у иконки приложения.
     */
    resetBadgeCount(): Promise<void>;
}
