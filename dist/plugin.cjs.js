'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const SsPush = core.registerPlugin('SsPush', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SsPushWeb()),
});

class SsPushWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SsPushWeb: SsPushWeb
});

exports.SsPush = SsPush;
//# sourceMappingURL=plugin.cjs.js.map
