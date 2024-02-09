# Contribution Guidelines


## Code Style

### Block Element Modifier (BEM)

Block `class-name`
Elements `class-name__element`
Modifier `class-name--modifier`

Styles uses BEM as it helps ensure immediate class dependency recognition, reduces run-time overwrites due to class name collision, and also reduces selector count by encouraging the use of low selector cohesion.

We do not use double nesting of the element syntax in our naming structure. `.base__element__element` (don't do this) as this implies structure of html syntax which could change at any time.

#### 3 selectors (BEM) vs 6 selectors (traditional)

```
// This is how we should be writing our css
.button { }
.button__icon { }
.button--large { }
```

```
// High probability of overwrites. Names are too generalized and selector count creep risk
.button { }
.button.large{ }
.button.large.red{ }
```

#### Some Resources on BEM

- http://getbem.com/
- https://css-tricks.com/bem-101/
- http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/

### Commenting

#### File Heading
```
// ============================================================================
```

#### Section Heading
```
// ----------------------------------------------------------------------------
// Section
// ----------------------------------------------------------------------------
```

#### Sub-Section Heading
```
// Sub-Section
// ----------------------------------------------------------------------------
```

*Multiline comments should wrap at 80 characters.

### Utilize Linting in Your Editor


## Theming

Everything within `core-ui` is theme-able, and so, any new development must utilize theming with the theme mixin and tokens.

### Using the Mixin

```
.button
  +theme((background: 'color-background-button', color: 'color-text-button'))
```

Some cases may require to use the alternative `+theme` markup, ie. multiple values per declaration.

```
+theme
  box-shadow: token('shadow-button-focus'), inset 0 0 0 1px token('color-border-button-hollow-focus')
```

### Tokens

Theme token maps can be found in the `themes/` directory. The maps consist of a token keys and their assigned color values.

```
$theme-light: (
  'color-background':         $white,
  'color-background-alt':     $hinted-grey-15,
  'color-background-alt-2':   $hinted-grey-14,
  'color-text':               $hinted-grey-2,
  'color-text-alt':           $hinted-grey-4,
  'color-text-alt-2':         $hinted-grey-7
)
```



## Pull Requests

Updates to `core-ui` can be submitted via a Pull Request.

### Provide Examples
If the update affects the design on the front-end, please provide screenshots (or even better, a staging environment) of the changes that will be made by the PR.

### Get Approval
PR's require 1 approval (in the form of a `+1` or `LGTM`) by a member of the Core Design team (#design-ui).

### Versioning and Publishing
Once accepted, the reviewing member of the Core team will merge the PR, version, and publish the release.
