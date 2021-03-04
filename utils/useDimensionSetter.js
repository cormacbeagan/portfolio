import { useState, useEffect } from 'react';

export const useDimensionSetter = () => {
  const notSSR = typeof window !== 'undefined';
  const [dimensions, setDimensions] = useState({
    width: notSSR ? window.innerWidth : 1000,
    height: notSSR ? window.innerHeight : 800,
  });

  useEffect(() => {
    const debouncedResizeHandle = debounce(() => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    });
    window.addEventListener('resize', debouncedResizeHandle);
    return () => window.removeEventListener('resize', debouncedResizeHandle);
  }, []);
  return dimensions;
};
function debounce(func, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      func.apply(this, arguments);
    }, ms);
  };
}

// based on the work of Reed Barger
// https://dev.to/reedbarger/how-to-create-a-usewindowsize-react-hook-2bcm
// accessed 28.02.20
