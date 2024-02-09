# Core UI

Core UI is a React component library and Sass/CSS framework managed by the Core Design team.

## An Introduction to Core UI

### What is Core UI?

Core UI is designed to be used a single source of truth for UI across the entire organization and consists of wide variety of atomic and complex configurable components. Beyond just these common React components, Core UI also provides:

* Shared variables and thematic color palettes in Sass
* Standardized spacing and responsive breakpoints
* Fonts and font sizing
* A canonical SVG iconography library
* A library of functional CSS helper classes

### Why Core UI?

Core UI hopes that by providing a common set of tools to build UI, we can have greater consistency, velocity, and happiness across designers, developers, users, and other stakeholders while bringing more people into the collaborative design process to define the look and feel of Twitch.

Implementing common components across Twitch means that we can constantly improve the accessibility, usability, and aesthetic quality of UI in a single consumable, versioned, dependency.

### When should I use Core UI?

Core UI is a constantly evolving project designed to meet many common needs across Twitch products. In that regard, it will never sufficiently cover every possible feature that we will create. It's important to understand that Core UI doesn't exist to limit what is possible, but to enable the creation of both very basic and extremely complex UI with the minimal amount of repetition in design and code. Core UI solves many common and repetitive UI and UX problems so that designers and developers can focus on solving problems that have not yet been solved and experiments that have not yet been tried.

There will always be one-off designs that don't belong in a component library or features that are sufficiently complex in interaction or different in scope that building them with common patterns may not make sense.

Still, always remember:

> If at all possible, use an existing component.

If existing components don't meet your needs, ask yourself again to be sure:

> Is there already a component or pattern that can solve this problem sufficiently?

When you are confident that existing patterns don't fulfill your feature's goals, you should push the envelope, test your assumptions, and build new features within your product's platform in hope that the features you build will be able to become patterns themselves.

### How can I get help or contribute to Core UI?

You can always talk with us on the Core Design team via our public slack channel #design-ui. You can ask any and all questions pertaining to Core UI, our design patterns, React components, and site UX and design.

We welcome contributors and hope to make Core UI into a product that is created and consumed by everyone at Twitch. Feel free to browse around and contribute back through suggestions, issues, and pull requests.

## Working with Core UI

Core UI (`core-ui`) is a component library and functional Sass framework for building Twitch UI.

This library includes modular, React-based, responsive components as well as a functional CSS framework containing global helpers, variables and mixins. The goal is to provide a toolkit of foundational building blocks to bootstrap new projects and provide the structural underpinning of larger front-end systems.

Including Core UI in your project is just like including any other NPM packaged dependency.

Start by adding the package to your project.

`yarn add twitch-core-ui@x.x.x`

It's important to always `add` or `upgrade` to a specific version of Core UI because **changes may break your project**.

### Previewing Core UI in your local environment

You can run the Core UI playground locally by running `yarn start` and pointing your browser to http://localhost:8090.

If you're working within Core UI and want to view your changes locally in another project, start by linking your package.

`yarn link`

Then navigate to your project that depends on Core UI.

`yarn link twitch-core-ui`

This will allow your project to consume the locally available version of Core UI.

### Consuming Core UI Sass

Core UI Sass provides many useful tools and features for downstream clients.

Set your include path in your Sass compilation step to include `node_modules/twitch-core-ui/src/sass`. This will help you import all or part of Core UI.

In Grunt, e.g.
```
sass: {
  options: {
    includePaths: [..., 'node_modules/twitch-core-ui/src/sass']
  }
}
```

In Webpack, e.g.
```
loader: 'sass-loader',
options: {
  includePaths: [..., path.resolve(__dirname, 'node_modules/twitch-core-ui/src/sass')],
}
```

It's recommended that you include `src/sass/core.functional.sass` in your local css compilation. It will give access to global `variables`, `mixins` including theming support, and the entire Core UI functional CSS framework.

`@import core.all` will also include styles for all defined components.

Or you can import only the pieces that you need:

```
// Just variables
@import core.variables

// Just buttons
@import components/buttons/styles
```

### Versioning Core UI

Please work with a member of the Core UI team (`#design-ui`) to coordinate releases.
* Patch `(0.0.x)` versions introduce additive or subtractive features that will not break previous implementations.
* Minor `(0.x.0)` versions introduce breaking or potentially breaking changes.
* Major `(x.0.0)` versions are for symbolic, milestone, or major infrastructural releases, and should also be considered potentially breaking.

## FAQ

### Where all the UI components/widgets/etc?

Twitch is now a React-forward organization. As we build more UI in React, the need for a shared, common, React component library is essential. All component patterns will live in `core-ui/src/components` will be built in React and function as a single source of truth for all componentized UI. This will include even basic components like buttons, tabs, and form fields.

### What if I want to use a component in a non-React environment?

Component styles are built in BEM and paired with React markup, and thus, their Sass can function as an API. This can be achieved by adding `twitch-core-ui` as a dependency to your project and consuming the resulting component Sass files for inclusion in your stylesheet.

### How should I build React components?

All common components' BEM blocks should be namespaced `tw-` to allow a more seamless transition into modern and legacy projects. Components should avoid using helper/utility classes for maximum modularity and responsiveness.
