import { WebPlugin } from '@capacitor/core';
export class SsPushWeb extends WebPlugin {
    async showDriverBannerNotification(options) {
        console.log('Плагин не реализован для Web. Используйте ОС Android');
        console.log(options);
    }
    async showChemistryBannerNotification(options) {
        console.log('Плагин не реализован для Web. Используйте ОС Android');
        console.log(options);
    }
    async showDriverTasksNotification(options) {
        console.log('Плагин не реализован для Web. Используйте ОС Android');
        console.log(options);
    }
    async showChemistryTasksNotification(options) {
        console.log('Плагин не реализован для Web. Используйте ОС Android');
        console.log(options);
    }
    async resetBadgeCount() {
        console.log('Плагин не реализован для Web. Используйте ОС Android');
    }
}
//# sourceMappingURL=web.js.map