import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Redirect, Route } from 'react-router-dom';

// Playground Principle Pages
import { IntroductionPage } from './pages/principles/introduction/introduction';
import { SassPage } from './pages/principles/sass/sass';
import { ThemingPage } from './pages/principles/theming/theming';
import { VariablesPage } from './pages/principles/variables/variables';

// Playground Component Pages
import { AspectPage } from './pages/components/aspect/aspect';
import { AvatarPage } from './pages/components/avatar/avatar';
import { BalloonPage } from './pages/components/balloon/balloon';
import { BrickPage } from './pages/components/brick/brick';
import { ButtonPage } from './pages/components/button/button';
import { CardPage } from './pages/components/card/card';
import { FormPage } from './pages/components/form/form';
import { InteractablePage } from './pages/components/interactable/interactable';
import { LayoutPage } from './pages/components/layout/layout';
import { PillPage } from './pages/components/pill/pill';
import { ProgressBarPage } from './pages/components/progress-bar/progress-bar';
import { StatPage } from './pages/components/stat/stat';
import { SVGPage } from './pages/components/svg/svg';
import { TabPage } from './pages/components/tab/tab';
import { TextPage } from './pages/components/text/text';
import { TowerPage } from './pages/components/tower/tower';

import './main.sass';

// Playground Components
import { MainNav } from './components/main-nav';
const renderIntroPage = () => <Redirect path="/" to="principles/introduction" />;

const root = (
  <HashRouter>
    <div className="root flex full-height">
      <MainNav />
      <main className="flex flex-grow-1 flex-shrink-1 full-height">
        <div className="content-wrapper">
          <Route exact path="/" render={renderIntroPage} />
          <Route path="/principles/introduction" component={IntroductionPage} />
          <Route path="/principles/theming" component={ThemingPage} />
          <Route path="/principles/variables" component={VariablesPage} />
          <Route path="/principles/sass" component={SassPage} />
          <Route path="/components/aspect" component={AspectPage} />
          <Route path="/components/avatar" component={AvatarPage} />
          <Route path="/components/balloon" component={BalloonPage} />
          <Route path="/components/brick" component={BrickPage} />
          <Route path="/components/button" component={ButtonPage} />
          <Route path="/components/card" component={CardPage} />
          <Route path="/components/form" component={FormPage} />
          <Route path="/components/interactable" component={InteractablePage} />
          <Route path="/components/layout" component={LayoutPage} />
          <Route path="/components/pill" component={PillPage} />
          <Route path="/components/progress-bar" component={ProgressBarPage} />
          <Route path="/components/stat" component={StatPage} />
          <Route path="/components/svg" component={SVGPage} />
          <Route path="/components/tab" component={TabPage} />
          <Route path="/components/text" component={TextPage} />
          <Route path="/components/tower" component={TowerPage} />
        </div>
      </main>
    </div>
  </HashRouter>
);

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
ReactDOM.render(root, rootElement);
