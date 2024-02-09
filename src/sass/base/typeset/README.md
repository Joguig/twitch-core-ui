# Typeset

## Headings

Default sizes are as follows. Easily manipulate heading sizes using `.font-size-#` helpers.

| Heading | Font Size  | Line Height |
|-------|--------|----|
| `h1` | 4rem   | 4rem |
| `h2` | 2.8rem | 3rem |
| `h3` | 2.4rem | 3rem |
| `h4` | 1.6rem | 2rem |
| `h5` | 1.4rem | 2rem |
| `h6` | 1.2rem | 2rem |
| `p`  | 1.2rem | 2rem |

## The `.typeset` Class

When laying out a region of text that may contain a mix of headings, lists, paragraphs or other type elements, wrap the block in a `.typeset` class to quickly format the sizes and line-hights of, and spacing between elements to enable a more natural type flow.

For example:
```
<div class="typeset">
  <h1>Main header</h1>
  <h2>Section Header</h2>
  <p>Body content</p>
  <ul>
    <li>List of items</li>
    <li>List of items</li>
    <li>List of items</li>
  </ul>
  <p>More text content</p>
</div>
```
