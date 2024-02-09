# Functional Classes

## Modules

1. [Border](/src/sass/functional/border)
1. [Color](/src/sass/functional/color)
1. [Display](/src/sass/functional/display)
1. [Flex](/src/sass/functional/flex)
1. [Position](/src/sass/functional/position)
1. [Spacing](/src/sass/functional/spacing)
1. [Typography](/src/sass/functional/typography)

## Responsive Prefixing

Some functional classes support responsive breakpoints via prefixing. e.g.

`<div class="xs-mg-1 md-mg-2 xl-mg-4">`

All prefixes, `xs`, `sm`, `md`, `lg`, `xl`, and `xxl` are supported. Classes that support responsive prefixes currently include:
```
  .inline
  .inline-block
  .block
  .hide
  .overflow-
  .float-
  .relative
  .absolute
  .fixed
  .pd-
  .mg-
  .font-size-
  .align-center
  .align-left
  .align-right
  .inline-flex
  .flex-column
  .flex-row
  .flex-column-reverse
  .flex-row-reverse
  .item-order-0
  .item-order-1
  .item-order-2
  .item-order-3
  .item-order-4
```

## The Mixin

### Single Property
To build a class with a single property, provide the classname along with a map containing desired property and value. Such as:
```
@include build-classes((
  'underline': ('text-decoration', underline),
));
```

which outputs:
```
.underline {
  text-decoration:
}
```

### Multiple Properties

### Multiple Properties, Same Value

You can specify multiple properties to have the same value:
```
'mg-x': (
  (
    'margin-left',
    'margin-right'
  ), (
    'auto': auto,
    '1': 1rem
  )
)
```

which outputs:
```
.mg-x-auto {
  margin-left: auto;
  margin-right: auto;
}

.mg-x-1 {
  margin-left: 1rem;
  margin-right: 1rem;
}
```

### Multiple Properties, Multiple Values

You can supply a map of values that map to the declarations defined:

```
'font-size': (
  (
    'font-size',
    'line-height'
  ),
  (
    '1': (
      2.8rem,
      3rem
    )
  )
)
```

which outputs:
```
.font-size-1 {
  font-size: 2.8rem;
  line-height: 3rem;
}
```
