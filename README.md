# plugin-sspush

Плагин предоставляет реализацию специфичных пуш-уведомлений для приложения "Мобильный пробоотборщик"

![1](https://i.ibb.co/rQJsTmd/image.jpg)
![2](https://i.ibb.co/NYgvnMS/image.jpg)

## Установка

* Загрузите код репозитория
* Поместите код репозитория в папку node_modules проекта (альтернативный вариант: выполните npm install "путь к папке с кодом плагина")
* Импортируйте класс: import {SsPush} from "..."
* Используйте: SsPush.showTasksNotification(...params...)

## API

<docgen-index>

* [`showBannerNotification(...)`](#showbannernotification)
* [`showTasksNotification(...)`](#showtasksnotification)
* [`resetBadgeCount()`](#resetbadgecount)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->


### showBannerNotification(...)

```typescript
showBannerNotification(options: { sound: boolean; vibration: boolean; vibrationLength: number; statusBarIcon: boolean; }) => any
```

| Param         | Type                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ sound: boolean; vibration: boolean; vibrationLength: number; statusBarIcon: boolean; }</code> |

**Returns:** <code>any</code>

--------------------


### showTasksNotification(...)

```typescript
showTasksNotification(options: { countOfTasks: number; sound: boolean; vibration: boolean; statusBarIcon: boolean; vibrationLength: number; }) => any
```

| Param         | Type                                                                                                                        |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ countOfTasks: number; sound: boolean; vibration: boolean; statusBarIcon: boolean; vibrationLength: number; }</code> |

**Returns:** <code>any</code>

--------------------


### resetBadgeCount()

```typescript
resetBadgeCount() => any
```

**Returns:** <code>any</code>

--------------------

</docgen-api>
