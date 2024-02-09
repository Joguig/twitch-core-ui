import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../../../components/layout';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const SassPage = () => {
  return (
    <div className="sass-page full-width">
      <PageHeader
        title="Sass Guidelines"
        description=""
        updateDate="June 22, 2017"
      />

      <Layout margin={{ bottom: 5 }}>
        <div className="section text-wrapper">
          <h3 className="section__heading">Getting Values</h3>

          <section className="section__body">
            <p>Wherever possible, CSS declaration values should be assigned by variables or theme tokens. These may not cover every case, but wherever a value may be reused for similar properties, a variable or theme token should be considered.</p>
          </section>

          <h4 className="section__sub-heading">Variables</h4>
          <div className="section__body">
            <p>Variables should be used for the following properties:</p>
            <ul className="section__list">
              <li><code>font-size</code></li>
              <li><code>font-weight</code></li>
              <li><code>font-family</code></li>
              <li><code>margin</code></li>
              <li><code>padding</code></li>
            </ul>
            <p>Ensure that the variable used is named accordingly to the property being set – avoid using a variable with a name that doesn't logically correlate to the property. See the <Link to="/principles/variables/">variable reference</Link>.</p>
          </div>

          <h4 className="section__sub-heading">Theming</h4>
          <div className="section__body">
            <p>The following properties should only be declared within the <code>theme</code> mixin:</p>
            <ul className="section__list">
              <li><code>color</code></li>
              <li><code>background</code></li>
              <li><code>border</code></li>
              <li><code>fill</code></li>
              <li><code>box-shadow</code></li>
            </ul>
            <p>More on <Link to="/principles/theming">theming</Link>.</p>
          </div>
        </div>
      </Layout>

      <Layout margin={{ bottom: 5 }}>
        <div className="section text-wrapper">
          <h3 className="section__heading">Units</h3>
          <div className="section__body">
            <p>For all properties that are not stylistic, we utilize <code>rem</code> units to allow for proper scaling between devices and resolution settings. <code>rem</code>'s are based on the <code>font-size</code> of the body. At Twitch, we have a base of <code>10px</code> so that <code>1rem</code> = <code>10px</code>.</p>
          </div>
        </div>
      </Layout>

      <Layout margin={{ bottom: 5 }}>
        <div className="section text-wrapper">
          <h3 className="section__heading">Naming Selectors</h3>
          <div className="section__body">
            <p>We utilize the BEM naming structure within our component styles to allow CSS to be used outside of React environments. The BEM methodology couples well with component-based thinking in that simpler, reusable components should be favored over a complex block. Using BEM selectors eliminates issues caused by inheritance that occurs when selecting elements through specificity.</p>
            <p>Tip: If you find yourself needing to write a second element, odds are that you should consider a new component all together.</p>
          </div>

          <div className="section__code-block"><pre><code>{`.block

  &__element
    &--modifier

  &--modifier`}</code></pre></div>

          <div className="section__code-block"><pre><code>{`.block { ... }
.block__element { ... }
.block__element--modifier { ... }
.block--modifier { ... }`}</code></pre></div>

          <h4 className="section__sub-heading">Resources</h4>
          <div className="section__body">
            <ul className="section__list">
              <li><a href="http://getbem.com/">Get BEM</a></li>
              <li><a href="https://css-tricks.com/bem-101/">BEM 101 &ndash; CSS Tricks</a></li>
              <li><a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">MindBEMding &ndash; CSS Wizardy</a></li>
            </ul>
          </div>
        </div>
      </Layout>

      <Layout margin={{ bottom: 5 }}>
        <div className="section text-wrapper">
          <h3 className="section__heading">Scope</h3>
          <div className="section__body">
            <p>Component styles should only select elements that are in their corresponding component mark up. Selecting elements outside of this scope will not work in React and leads to inheritance issues that are hard to track outside of React environments.</p>
          </div>
        </div>
      </Layout>

      <Layout margin={{ bottom: 5 }}>
        <div className="section text-wrapper">
          <h3 className="section__heading">Media Queries</h3>
          <div className="section__body">
            <p>In an effort to adopt mobile-first mindset, our media queries add styles progressively through <code>min-width</code>. Styles outside of media queries are always applied, and styles within media queries are applied from the width of the breakpoint and up.</p>
            <p>Breakpoints should only be accessed through the <code>mq</code> mixin that excepts the following keys: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>.</p>
          </div>
          <div className="section__code-block"><pre><code>{`+mq('sm')`}</code></pre></div>
        </div>
      </Layout>

      <Layout margin={{ bottom: 5 }}>
        <div className="section text-wrapper">
          <h3 className="section__heading">Style and Linting</h3>

          <h4 className="section__sub-heading">Comments</h4>
          <div className="section__body">
            <p>Keep row length under 80 characters.</p>
          </div>
          <div className="section__code-block"><pre><code>{`// ------------------------------------------------------------------------
// Block Heading
// ------------------------------------------------------------------------
// Staghorn sculpin char sea catfish nibbler false trevally, rockfish.
// Bocaccio prickleback, anglerfish Billfish nurseryfish lanternfish hog
// sucker: tiger shark silver carp surfperch.`}</code></pre></div>
          <div className="section__code-block"><pre><code>{`// Section Heading
// ------------------------------------------------------------------------`}</code></pre></div>
        </div>

        <h4 className="section__sub-heading">Linting Rules</h4>
        <div className="lint-rule-table">
          <div className="lint-rule-table__header">
            <div className="lint-rule-table__header-item">Rule</div>
            <div className="lint-rule-table__header-item">Do</div>
            <div className="lint-rule-table__header-item">Don't</div>
          </div>
          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Attribute Quotes</h5>
              <p>Use single-quotes around attribute values in attribute selectors</p>
            </div>
            <div className="lint-rule-table__cell"><code>{`&[type='text']`}</code></div>
            <div className="lint-rule-table__cell"><code>{`&[type=text]`}</code></div>
          </div>
          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Bem Depth</h5>
              <p>Blocks should only have one level of elements.</p>
            </div>
            <div className="lint-rule-table__cell"><code>{`.block__element`}</code></div>
            <div className="lint-rule-table__cell"><code>{`.block__element__element`}</code></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Declarations Before Nesting</h5>
              <p>Declarations within a selector should be written before nested selectors.</p>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.block
  display: block

  .element`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`.block
  .element
    font-size: $font-size-4

  display: block`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Empty Arguments</h5>
              <p>Write mixins without parentheses if no arguments are being supplied.</p>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.block
  +theme`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`.block
  +theme()`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Empty Line Between Blocks</h5>
              <p>Leave a line between the declarations of the previous selector.</p>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.block
  display: block

.another-block
  display: block`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`.block
  display: block
.another-block
  display: block`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Mixins before Declarations</h5>
              <p>Call mixins at the top of each selector before other declarations. This concept is similar to importing files at the top of a file in React.</p>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.block
  +theme((color: 'color-text'))
  display: block
  padding: $space-1`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`.block
  display: block
  padding: $space-1
  +theme((color: 'color-text'))`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Force Nesting</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.block
  &__element

.block
  &[type='text']

.block
  &::before`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`.block__element

.block[type='text']

.block::before`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Function/Mixin Name Format</h5>
            </div>
            <div className="lint-rule-table__cell"><code>{`@function function-name($args)`}</code></div>
            <div className="lint-rule-table__cell"><code>{`@function functionName($args)`}</code></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Leading Zero</h5>
            </div>
            <div className="lint-rule-table__cell"><code>{`top: 0.5rem`}</code></div>
            <div className="lint-rule-table__cell"><code>{`top: .5rem`}</code></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Color Keywords/Literals</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`+theme
  color: token('color-text')`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`color: red
color: #fff000
color: rgba(255, 255, 255, 1)
`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Nesting Depth</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.block
  &__depth-1
    &--depth-2`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`.block
  &__depth-1
    &--depth-2
      &--depth-3`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Combinators</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.card
  &__title`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`.card
  > .title

.card
  + .card`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>CSS Comments</h5>
            </div>
            <div className="lint-rule-table__cell"><code>{`//`}</code></div>
            <div className="lint-rule-table__cell"><code>{`/* */`}</code></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Duplicate Properties</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.block
  display: block
  position: relative`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`.block
  display: block
  position: relative
  display: flex`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Empty Rulesets</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.selector
  display: block`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`.selector`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Extends</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.selector
  +reusable-styles`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`.selector
  @include .reusable-styles`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>ID Selectors</h5>
            </div>
            <div className="lint-rule-table__cell"><code>{`.selector`}</code></div>
            <div className="lint-rule-table__cell"><code>{`#selector`}</code></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Important</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.selector
  display: block`}</code></pre></div>
            <div className="lint-rule-table__cell"><code>{`.selector
  display: block !important`}</code></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Mergeable Selectors</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.selector
  position: absolute
  top: 0
  left: 0`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`.selector
  position: absolute

.selector
  top: 0
  left: 0`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Qualifying Elements</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.heading
  font-size: $font-size-4`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`h3
  font-size: $font-size-4`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Transition All</h5>
            </div>
            <div className="lint-rule-table__cell"><code>{`transition: background-color 0.2s ease-in`}</code></div>
            <div className="lint-rule-table__cell"><code>{`transition: all 0.2 ease-in`}</code></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Universal Selectors</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.block
display: inline-block

  &__element
    vertical-align: middle`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`*
  display: inline-block

.block
  > *
    vertical-align: middle`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Vendor Prefixes</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`display: flex`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`display: -webkit-box
-webkit-box-flex: 1
-webkit-flex: 1
-ms-flex: 1`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Property Sort Order</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.selector
  display: block
  position: absolute
  top: 0
  left: 0
  margin: 0
  padding: 0
  font-size: $font-size-4`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`.selector
  font-size: $font-size-4
  padding: 0
  left: 0
  margin: 0
  display: block
  position: absolute
  top: 0`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Pseudo Element Selectors</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.selector
  &::before`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`.selector
  &:before`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Single Quotes</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.selector
  &::before
    content: ''`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`.selector
  &::before
    content: ""`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Single Line Per Selector</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`.selector,
.another`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`.selector, .another`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Shorthand</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`padding: $space-1 $space-2`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`padding: $space-1 $space-2 $space-1 $space-2`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Spaces</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`display: block`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`display:block`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>URL Quotes</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`background:
  url('path/to/image')`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`background:
  url(path/to/image)`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Variable Name Format</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`$variable-name-format: 1rem`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`$variable_name_format: 1rem
$variableNameFormat: 1rem`}</code></pre></div>
          </div>

          <div className="lint-rule-table__row">
            <div className="lint-rule-table__cell">
              <h5>Zero Unit</h5>
            </div>
            <div className="lint-rule-table__cell"><pre><code>{`margin: 0`}</code></pre></div>
            <div className="lint-rule-table__cell"><pre><code>{`margin: 0rem`}</code></pre></div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
