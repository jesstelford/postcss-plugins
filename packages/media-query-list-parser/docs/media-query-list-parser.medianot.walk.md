<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/media-query-list-parser](./media-query-list-parser.md) &gt; [MediaNot](./media-query-list-parser.medianot.md) &gt; [walk](./media-query-list-parser.medianot.walk.md)

## MediaNot.walk() method

**Signature:**

```typescript
walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaNotWalkerEntry;
        parent: MediaNotWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  cb | (entry: { node: [MediaNotWalkerEntry](./media-query-list-parser.medianotwalkerentry.md)<!-- -->; parent: [MediaNotWalkerParent](./media-query-list-parser.medianotwalkerparent.md)<!-- -->; state?: T; }, index: number \| string) =&gt; boolean \| void |  |
|  state | T | _(Optional)_ |

**Returns:**

false \| undefined

