import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { SVG, SVGAsset, SVGType } from '../../../components/svg';
import './styles.sass';

export const MainNav = () => {
  return (
    <aside className="main-nav-wrapper fixed border-r flex full-height flex-grow-0 flex-shrink-0">
      <nav className="nav full-width">
        <div className="pd-x-2 pd-y-5 main-nav__logo flex justify-content-center border-b">
          <SVG type={SVGType.Inherit} asset={SVGAsset.LogoTwitch} width={94} height={32} />
          <h1 className="hide-accessible">Core UI</h1>
        </div>
        <a href="#" className="main-nav__link">Principles</a>
        <ul className="pd-2 border-b">
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/principles/introduction">Introduction</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/principles/sass">SASS Guidelines</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/principles/theming">Theming</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/principles/variables">Variables</NavLink></li>
        </ul>
        <a href="#" className="main-nav__link">Components</a>
        <ul className="pd-2">
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/aspect">Aspect</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/avatar">Avatar</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/balloon">Balloon</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/brick">Brick</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/button">Button</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/card">Card</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/form">Form</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/interactable">Interactable</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/layout">Layout</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/pill">Pill</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/progress-bar">Progress Bar</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/stat">Stat</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/svg">SVG</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/tab">Tab</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/text">Text</NavLink></li>
          <li><NavLink activeClassName="main-nav__sub-link--active" className="main-nav__sub-link" to="/components/tower">Tower</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};
