import React, { useState } from 'react';
// import * as ZS from './styles';

const QuartoCasal = () => {
  const [showQuartoCasal, setShowQuartoCasal] = useState(false);
  const onClick = () => setShowQuartoCasal(true);
  return (
    <div>
      <input type="submit" value="Search" onClick={onClick} />
      { showQuartoCasal ? <Results /> : null }
    </div>
  );
};

const Results = () => (
  <div>
    Quarto Casal
  </div>
);

const MainContent = () => (
  <QuartoCasal />
);

export default MainContent;
