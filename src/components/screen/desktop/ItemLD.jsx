import React, { useState } from 'react';
import './ItemLD.css';

const ItemLD = ({ name, price, image }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className="before-uniq-MainItem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="before-uniq-ImgItem"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="before-uniq-ImgItmFavBar">
          <div className="before-uniq-ImgItmIcon">
            <img
              className="before-uniq-FavIcon"
              src="https://i.postimg.cc/tRPnwm0P/favorite-svgrepo-com-2.png"
              alt="Favorite Icon"
            />
          </div>
        </div>
        <div className="before-uniq-ImgMiddleFiller"></div>
        <div className={isHovering ? 'before-visibleBB' : 'before-hiddenBB'}>
          <div className="before-uniq-ImgItmTxtinimg">
            <div className="before-uniq-ProductTxt2">
              {name}
            </div>
          </div>
        </div>
      </div>
      {/* product button */}
      <div className={isHovering ? 'before-visibleBBb' : 'before-hiddenBBb'}>
        <div className="but-itm">
        <div className="before-uniq-ItemButton">
          <img
            className="before-uniq-ButtonIcon"
            src="https://i.postimg.cc/R0qSF54C/cart-large-minimalistic-svgrepo-com-1.png"
          />
          <div className="before-uniq-ButtonText">
            Add To Cart
          </div>
          </div>
        </div>
      </div>
      <div className={isHovering ? 'before-visiblePPp' : 'before-hiddenPPp'}>
        {/* product name */}
        <div className="before-uniq-ProductName" name="name">
          {name}
        </div>
        {/* product price */}
        <div className="before-uniq-ProductPrice" name="price">
          {price}
        </div>
      </div>
    </div>
  );
};

export default ItemLD;
