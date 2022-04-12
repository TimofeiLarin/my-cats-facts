import React from 'react';

import Flex from '../Flex';
import {
  ButtonLimit,
  WrapperPopup,
  PopupLimit,
  PopupItem,
} from './Limitations.styles';

type LimitationsProps = {
  limitItem: number;
  choiceLimit: (limit: number) => void;
}

const ItemsLimit = [
  { limit: 10 },
  { limit: 20 },
  { limit: 50 },
  { limit: 100 },
];

const Limitations: React.FC<LimitationsProps> = ({ limitItem, choiceLimit }) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const sortRef = React.useRef<HTMLHeadingElement>(null);

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handelOutsideClick = (event: any): void => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) setVisiblePopup(false);
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handelOutsideClick);
  }, []);

  const onSelectItem = React.useCallback(
    (limit: number) => {
      choiceLimit(limit);
      setVisiblePopup(false);
    },
    [choiceLimit]
  );

  return (
    <WrapperPopup ref={sortRef}>
      <Flex>
        <p>Facts on page:</p>
        <ButtonLimit onClick={toggleVisiblePopup}>
          {limitItem} <img src='./assets/icons/Popup.svg' alt='Arrow popup' />
        </ButtonLimit>
      </Flex>
      {visiblePopup && (
        <PopupLimit>
          {ItemsLimit.map(({ limit }, index) => (
            <PopupItem
              key={`${limit}_${index}`}
              onClick={() => onSelectItem(limit)}
            >
              {limit}
            </PopupItem>
          ))}
        </PopupLimit>
      )}
    </WrapperPopup>
  );
};
export default Limitations;
