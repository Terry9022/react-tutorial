import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  // while fetching data
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // done fetching data
      setIsLoading(false);
    }, 3000);
  }, []);

  
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
