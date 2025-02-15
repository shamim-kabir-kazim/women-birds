import React from 'react';
import Favrt from '../screen/desktop/Favrt';
import Sepa from '../screen/desktop/Sepa';
import TextHed from '../screen/desktop/TextHed';

const FavrtPage = () =>
  
  {

  return (
    <div>
      <Sepa />
      <TextHed text={"Favorite"} />
      <Favrt/>
    </div>
  );
};

export default FavrtPage;
