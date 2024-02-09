import * as React from 'react';
import { Brick } from '../../../../components/brick';
import { Layout } from '../../../../components/layout';
import { PageHeader } from '../../../components/page-header';
import './styles.sass';

export const IntroductionPage = () => {
  return (
    <div className="intro-page full-width">
      <PageHeader
        title="Intro to Core UI"
        description="Core UI is a React component library and Sass/CSS framework managed by the Core Design team."
        updateDate="June 19, 2017"
      />

      <h2 className="section__heading">What is Core UI</h2>
      <div className="section__body">
        <p>Core UI is designed to be used a single source of truth for UI across the entire organization and consists of wide variety of atomic and complex configurable components. Beyond just these common React components, Core UI also provides:</p>
        <ul className="section__list">
          <li>Shared variables and thematic color palettes in Sass</li><li>Standardized spacing and responsive breakpoints</li><li>Fonts and font sizing</li><li>A canonical SVG iconography library</li><li>A library of functional CSS helper classes</li>
        </ul>
      </div>

      <h2 className="section__heading">Why Core UI</h2>
      <div className="section__body">
        <p>Core UI hopes that by providing a common set of tools to build UI, we can have greater consistency, velocity, and happiness across designers, developers, users, and other stakeholders while bringing more people into the collaborative design process to define the look and feel of Twitch.</p>
        <p>Implementing common components across Twitch means that we can constantly improve the accessibility, usability, and aesthetic quality of UI in a single consumable, versioned, dependency.</p>
      </div>

      <h2 className="section__heading">When to use Core UI</h2>
      <div className="section__body">
        <p>Core UI is a constantly evolving project designed to meet many common needs across Twitch products. In that regard, it will never sufficiently cover every possible feature that we will create. It's important to understand that Core UI doesn't exist to limit what is possible, but to enable the creation of both very basic and extremely complex UI with the minimal amount of repetition in design and code. Core UI solves many common and repetitive UI and UX problems so that designers and developers can focus on solving problems that have not yet been solved and experiments that have not yet been tried.</p>
        <p>There will always be one-off designs that don't belong in a component library or features that are sufficiently complex in interaction or different in scope that building them with common patterns may not make sense.</p>
        <p>Still, always remember:</p>

        <Layout margin={{ bottom: 2 }}>
          <Brick marked>
            <Layout margin={1}>
              <blockquote>
                If at all possible, use an existing component.
              </blockquote>
            </Layout>
          </Brick>
        </Layout>

        <p>If existing components don't meet your needs, ask yourself again to be sure:</p>

        <Layout margin={{ bottom: 2 }}>
          <Brick marked>
            <Layout margin={1}>
              <blockquote>
                Is there already a component or pattern that can solve this problem sufficiently?
              </blockquote>
            </Layout>
          </Brick>
        </Layout>

        <p>When you are confident that existing patterns don't fulfill your feature's goals, you should push the envelope, test your assumptions, and build new features within your product's platform in hope that the features you build will be able to become patterns themselves.</p>
      </div>

      <h2 className="section__heading">How to get help or contribute to Core UI</h2>
      <div className="section__body">
        <p>You can always talk with us on the Core Design team via our public slack channel #design-ui. You can ask any and all questions pertaining to Core UI, our design patterns, React components, and site UX and design.</p>
        <p>The Core UI repository is available at https://git-aws.internal.justin.tv/web/core-ui/. We welcome contributors and hope to make Core UI into a product that is created and consumed by everyone at Twitch. Feel free to browse around and contribute back through suggestions, issues, and pull requests.</p>
      </div>
    </div>
  );
};
