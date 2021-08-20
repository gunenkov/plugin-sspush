import { WebPlugin } from '@capacitor/core';
export class SsPushWeb extends WebPlugin {
    async showBannerNotification(options) {
        console.log('Плагин не реализован для Web. Используйте ОС Android');
        console.log(options);
    }
    async showTasksNotification(options) {
        console.log('Плагин не реализован для Web. Используйте ОС Android');
        console.log(options);
    }
    async resetBadgeCount() {
        console.log('Плагин не реализован для Web. Используйте ОС Android');
    }
}
//# sourceMappingURL=web.js.map