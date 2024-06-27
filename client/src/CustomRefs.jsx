import { useRef } from 'react';

const useCustomRefs = () => {
  const infoRef = useRef(null);
  const contactRef = useRef(null);

  return { infoRef, contactRef };
};

export default useCustomRefs;