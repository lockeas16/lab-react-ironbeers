import React from "react";
import { Link } from "react-router-dom";

const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => (
  <Link to={`/beer/${_id}`} className="uk-link-reset">
    <div
      className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
      uk-grid="true"
    >
      <div className="uk-flex uk-flex-left uk-flex-middle uk-width-expand">
        <div className="uk-card-media-left uk-cover-container uk-width-1-3">
          <ul className="uk-thumbnav">
            <li>
              <img className="beerImg" src={image_url} alt={name} />
            </li>
          </ul>
        </div>
        <div className="uk-width-2-3 uk-text-left">
          <div className="uk-card-body">
            <h3 className="uk-card-title uk-heading-small">{name}</h3>
            <p className="uk-text-muted">{tagline}</p>
            <p className="uk-text-bold">Created by: {contributed_by}</p>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default BeerCard;
