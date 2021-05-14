import { useEffect, useRef } from 'react';

const useDoubleClick = ({
  onSingleClick = () => {},
  onDoubleClick = () => {},
  latency = 200,
}) => {
  // const [clickCount, setClickCount] = useState(0)
  const ref = useRef();

  useEffect(() => {
    let clickCount = 0;
    let timer;

    const handleClick = () => {
      clickCount += 1;

      timer = setTimeout(() => {
        if (clickCount === 1) {
          onSingleClick();
        } else if (clickCount > 1) {
          onDoubleClick();
        }

        clickCount = 0;
      }, latency);
    };

    if (ref.current) {
      ref.current.addEventListener('click', handleClick);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('click', handleClick);
      }
      clearTimeout(timer);
    };
  }, [ref.current]);

  return ref;
};

export default useDoubleClick;
