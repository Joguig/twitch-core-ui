# Typography

## Classes

### Font Size

`.font-size` `-` [`1`-`8`|`base`]

```
.font-size-3 {
  font-size: $font-size-3;
  line-height: 3rem;
}
.font-size-base {
  font-size: $font-size-base;
  line-height: 2rem;
}
```

### Decoration, Weight, and Transform

| Class  | Output  |
|--------|---------|
| `strong` | `font-weight: $font-weight-bold` |
| `italic` | `font-style: italic` |
| `nowrap` | `white-space: nowrap` |
| `underline` | `text-decoration: underline` |
| `upcase` | `text-transform: uppercase` |
| `capcase` | `text-transform: capitalize` |


Note: `.ellipsis` is still the same as it's original implementation.
```
.ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
```
