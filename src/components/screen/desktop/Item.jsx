import React, { useState } from 'react';
import './Item.css';

const Item = ({ name, price, image }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className="MainItem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        data-layer="img-item"
        className="ImgItem"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div data-layer="img-itm-fav-bar" className="ImgItmFavBar">
          <div data-layer="img-itm-icon" className="ImgItmIcon">
            <img
              data-layer="fav-icon"
              className="FavIcon"
              src="https://i.postimg.cc/tRPnwm0P/favorite-svgrepo-com-2.png"
              alt="Favorite Icon"
            />
          </div>
        </div>
        <div data-layer="img-middle-filler" className="ImgMiddleFiller"></div>
        <div className={isHovering ? 'visibleBB' : 'hiddenBB'}>
          <div data-layer="img-itm-txtinimg" className="ImgItmTxtinimg">
            <div data-layer="This is a demo product" className="ProductTxt2">
              {name}
            </div>
          </div>
        </div>
      </div>
      {/* product button   */}
      <div className={isHovering ? 'visibleBB' : 'hiddenBB'}>
        <div data-layer="item-button" className="ItemButton">
          <img
            data-layer="button-icon"
            className="ButtonIcon"
            src="https://i.postimg.cc/R0qSF54C/cart-large-minimalistic-svgrepo-com-1.png"
          />
          <div data-layer="button-text" className="ButtonText">
            Add To Cart
          </div>
        </div>
      </div>
      <div className={isHovering ? 'visiblePP' : 'hiddenPP'}>
        {/* product name     */}
        <div className="ProductName" name="name">
          {name}
        </div>
        {/* product price   */}
        <div className="ProductPrice" name="price">
          {price}
        </div>
      </div>
    </div>
  );
};

export default Item;
