import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => (
  <section className="uk-section uk-section-primary uk-section-xsmall uk-padding-remove-vertical">
    <div className="uk-container uk-container-expand">
      <nav
        className="uk-navbar-container uk-navbar-transparent"
        uk-navbar="true"
      >
        <div className="uk-navbar-left">
          <span
            uk-icon="icon:menu; ratio: 2"
            uk-toggle="target: #offcanvas-slide"
          />
        </div>
        <div className="uk-navbar-center">
          <div className="uk-navbar-center-left" />
          <Link to="/" className="uk-navbar-item uk-logo">
            <span className="uk-icon-button" uk-icon="icon: home; ratio: 2" />
          </Link>
          <div className="uk-navbar-center-right" />
        </div>
      </nav>

      <div id="offcanvas-slide" uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
          <button
            className="uk-offcanvas-close"
            type="button"
            uk-close="true"
          />
          <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li className="uk-active">
              <NavLink to="/all-beers">
                <span className="uk-margin-small-right" uk-icon="icon: world" />
                All Beers
              </NavLink>
            </li>
            <li className="uk-nav-divider" />
            <li className="uk-parent">
              <NavLink to="/ranbom-beer">
                <span className="uk-margin-small-right" uk-icon="icon: bolt" />
                Random Beer
              </NavLink>
            </li>
            <li className="uk-nav-divider" />
            <li className="uk-parent">
              <NavLink to="#">
                <span className="uk-margin-small-right" uk-icon="icon: plus" />
                New Beer
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default NavBar;
