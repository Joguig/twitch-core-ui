# Functions and Mixins

## Responsive

The media query mixin accepts a break point key (ie. `sm`, `md`, `lg`, `xl`) and writes it's contents within a media query with a `min-width`  that correlates to that key's value.

Use:
```
+mq('md')
  .block
    display: block
```

To output:
```
@media (min-width: 1024px) {
  .block {
    display: block;
  }
}
```
