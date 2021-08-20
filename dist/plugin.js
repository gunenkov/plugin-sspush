var capacitorSsPush = (function (exports, core) {
    'use strict';

    const SsPush = core.registerPlugin('SsPush', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SsPushWeb()),
    });

    class SsPushWeb extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SsPushWeb: SsPushWeb
    });

    exports.SsPush = SsPush;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
