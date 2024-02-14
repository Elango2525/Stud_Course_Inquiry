import { useEffect } from 'react';

const Scroll = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return null; // Since this is just a utility component, it doesn't render anything
};

export default Scroll;
