import React from 'react';
import Button from '../button';
import Badge from '../badge';
import './Card.scoped.css';

function CardPrice({
  price,
  discount,
  foregroundColor,
}) {
  const style = {
    color: foregroundColor,
  };

  if (!discount) {
    return (
      <div style={style} className="card__prices">
        <p style={style} className="prices__price">{`kn${price}`}</p>
      </div>
    );
  }
  return (
    <>
      <div className="card__prices">
        <strike style={style}><p style={style} className="prices__price">{`kn${price}`}</p></strike>
        <p style={style} className="prices__discounted-price">{`kn${price - price * discount}`}</p>
      </div>
      <p style={style} className="prices__discount">{`Limited ${discount * 100}% discount`}</p>
    </>
  );
}

function Card({
  image,
  title,
  description,
  price,
  discount,
  age,
  primaryColor,
  secondaryColor,
}) {
  return (
    <div className="card">
      {!image
        ? <div className="card__image--placeholder" />
        : <img src={image} alt={title} className="card__image" />}
      <div className="card__content">
        <h3 style={{ color: primaryColor }} className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <CardPrice price={price} discount={discount} foregroundColor={primaryColor} />
        <div className="card__buttons">
          <Button
            text="Shop now"
            backgroundColor={primaryColor}
            foregroundColor={secondaryColor}
          />
          <Badge
            topText="Ages"
            bottomText={`${age}+`}
            backgroundColor={primaryColor}
            foregroundColor={secondaryColor}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
