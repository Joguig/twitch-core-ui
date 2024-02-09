# Spacing

Spacing provides margin and padding helpers that are based on a pre-defined set of values. This ensures that spacing values used within applications are limited to that set – eliminating the need for arbitrary values and providing better consistency in the design.

## Naming Convention

### Shorthand

| Class | Description |
| ------| ------------|
| `mg`  | Margin      |
| `pd`  | Padding     |


### Modifiers

| Identifier | Description  |
|------------|--------------|
| None       | All          |
| `t`        | Top          |
| `r`        | Right        |
| `b`        | Bottom       |
| `l`        | Left         |
| `x`        | Left & Right |
| `y`        | Top & Bottom


### Values

| Identifier | Description |
|------------|-------------|
| `05`, `1`-`5` | Spacing increments. |
| `auto`     | Sets `auto`. Only available for `mg-x`, `mg-l`, and `mg-r`. |


### Examples

```
.pd-1 { padding: $space-1; }
.mg-r-1 { margin-right: $space-1; }

.mg-x-auto {
  margin-left: auto;
  margin-right: auto;
}
```

## In Development

* **Breakpoint Prefixes**: Class prefixes such as `sm-` and `md-` will be added to allow spacing to be set via helpers per breakpoint.
