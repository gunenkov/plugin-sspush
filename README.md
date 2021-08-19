# plugin-sspush

Special PUSHes for Android

## Install

```bash
npm install plugin-sspush
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`showBannerNotification(...)`](#showbannernotification)
* [`showTasksNotification(...)`](#showtasksnotification)
* [`resetBadgeCount()`](#resetbadgecount)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => any
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>any</code>

--------------------


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
