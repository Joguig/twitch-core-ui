# Flexbox

Flexbox is a powerful – and `flex`ible – module for creating layouts. Our functional CSS module provides all of the necessary flexbox properties in a composable way.

## Container vs. Child

### Container Classes

The following classes can be applied to the container and will dictate the behavior of the child elements.

| Class      | Options  |
|------------|------------|
| `flex`   | - |
| `inline-flex` | - |
| `flex-` | `wrap`, `nowrap`, `column`, `column-reverse`, `row`, `row-reverse` |
| `align-items-` | `start`, `end`, `center`, `baseline`, `stretch` |
| `justify-content- ` | `start`, `end`, `center`, `between`, `around`     |

### Child Classes

These classes can be applied to children elements and will dictate the behavior of the element itself.

| Class      | Options  |
|------------|------------|
| `align-self-` | `start`, `end`, `center`, `baseline`, `stretch`     |
| `align-content-` | `start`, `end`, `center`, `between`, `around`     |
| `flex-grow-`   | `0`, `1`, `2`, `3`, `4` |
| `flex-shrink-`   | `0`, `1`, `2`, `3`, `4` |
| `flex-order-` | `0`, `1`, `2`, `3`, `4` |

---

For a more in-depth look at how flexbox works, check out the **[Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)** by Chris Coyier from CSSTricks.

And, for a look at how these classes are applied, visit the Flexbox page on **[design.internal](http://design.internal.justin.tv/ui/layout/flex.html)**.
