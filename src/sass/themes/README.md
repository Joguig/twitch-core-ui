# Themes

Themes are made up of maps that relate the available colors to design tokens – body text, body background, button background, etc.

```
$theme-light: (
  'color-background':         $white,
  'color-background-alt':     $hinted-grey-14,
  'color-background-alt-2':   $hinted-grey-12,
  'color-background-error':   $red,
  'color-background-overlay': $black,
  ...
  'color-text':               $hinted-grey-3,
  'color-text-alt':           $hinted-grey-5,
  'color-text-alt-2':         $hinted-grey-7,
  'color-text-link':          $twitch-purple-7,
  'color-text-error':         $red,
  'color-text-overlay':       $hinted-grey-15,
  'color-text-overlay-alt':   $hinted-grey-10,
  ...
  'color-border':             $hinted-grey-12
  ...
);
```

### Configuring Which Themes to Build

The `$themes` map relates each theme's map of tokens to a key. The key is used in generating the classname, ie `.theme--light`, and selecting a theme as the default with the ``$default-theme` variable.

```
$themes: (
  'light': $theme-light,
  'dark': $theme-dark
)

$default-theme: 'light'
```

### Applying Theming in Components

Theming can be applied through the `theme` mixin which accepts a map of properties and the token to apply to that property. In processing, the mixin will loop through each theme map and create the declarations.

```
.card
  +theme((color: 'color-text'))

.card__meta
  +theme((background: 'color-background-overlay', color: 'color-text-overlay'))
```

Alternatively, declarations can be written out under the mixin. This is useful for long declarations that would be easier to read on multiple lines, or for properties that have multiple values (delimited by a comma).

```
+theme
  box-shadow: inset 0 0 0 token('border-width') token('color-border-input-focus'), token('shadow-input-focus')
```
