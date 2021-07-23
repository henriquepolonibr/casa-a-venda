import React, { useState } from 'react';
// import * as ZS from './styles';

const QuartoCasal = () => {
  const [showQuartoCasal, setShowQuartoCasal] = useState(false);
  const [showQuartoCasal2, setShowQuartoCasal2] = useState(false);
  const showQuartoCasalClick = () => {
    setShowQuartoCasal(true);
    setShowQuartoCasal2(true);
    console.log('showQuartoCasal', showQuartoCasal);
    console.log('showQuartoCasal2', showQuartoCasal2);
  };
  return (
    <div>
      <input type="submit" value="MainContentCopy" onClick={showQuartoCasalClick} />
      { showQuartoCasal ? <Results /> : null }
    </div>
  );
};

const Results = () => (
  <div>
    Quarto Casal
  </div>
);

const MainContentCopy = () => (
  <QuartoCasal />
);

export default MainContentCopy;
