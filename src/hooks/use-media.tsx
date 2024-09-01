import { useState, useEffect } from 'react';

// Custom hook to handle media queries
export const useMedia = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    handleChange(); // Check on mount
    mediaQuery.addEventListener('change', handleChange); // Listen for changes

    return () => mediaQuery.removeEventListener('change', handleChange); // Cleanup
  }, [query]);

  return matches;
};
