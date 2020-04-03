import React from 'react';

import Icon from '../../../Icon';

const SVG_S = (
  <path d="M2.00693 15C1.70486 15 1.50348 14.9 1.3021 14.7C1.00003 14.4 0.899339 14 1.10072 13.7L2.20831 10.3C1.80555 9.4 1.70486 8.6 1.70486 7.7C1.70486 5.2 3.11452 2.9 5.43039 1.7C6.3366 1.2 7.3435 1 8.3504 1H8.65247C12.0759 1.2 14.7946 3.9 14.9959 7.3V7.7C14.9959 8.7 14.7946 9.8 14.2911 10.7C13.1835 13 10.8677 14.4 8.24971 14.4C7.3435 14.4 6.43729 14.2 5.63177 13.9L2.20831 15C2.20831 15 2.10762 15 2.00693 15ZM8.3504 3C7.64557 3 6.94074 3.2 6.3366 3.5C4.72556 4.3 3.71866 5.9 3.71866 7.7C3.71866 8.4 3.92004 9.1 4.22211 9.8C4.3228 10 4.3228 10.3 4.3228 10.6L3.71866 12.5L5.63177 11.9C5.93384 11.8 6.13522 11.8 6.43729 12C7.04143 12.3 7.84695 12.5 8.55178 12.5C10.3642 12.5 11.9752 11.5 12.7808 9.9C12.8815 9.1 13.0828 8.4 13.0828 7.7V7.3C12.9821 5 11.069 3.1 8.65247 3H8.3504Z" />
);

const SVG_M = (
  <path d="M3 22C2.7 22 2.5 21.9 2.3 21.7C2 21.4 1.9 21 2.1 20.7L3.9 15.4C3.3 14.2 3 12.8 3 11.5C3 7.9 5 4.6 8.3 3C9.6 2.3 11.1 2 12.5 2H13C17.9 2.3 21.7 6.1 22 10.9V11.5C22 13 21.7 14.4 21 15.8C19.4 19 16.1 21 12.5 21C11.2 21 9.9 20.7 8.7 20.2L3.4 22C3.2 22 3.1 22 3 22ZM12.5 4C11.3 4 10.2 4.3 9.2 4.8C6.6 6.1 5 8.6 5 11.5C5 12.7 5.3 13.8 5.8 14.8C5.9 15 5.9 15.3 5.9 15.6L4.6 19.4L8.4 18.1C8.7 18 8.9 18 9.2 18.2C10.2 18.7 11.4 19 12.5 19C15.4 19 17.9 17.4 19.2 14.9C19.7 13.9 20 12.7 20 11.5V11C19.8 7.2 16.8 4.2 12.9 4H12.5Z" />
);

export const IconChat = (props) => {
  let svg;

  if (props.size === 'xs')
    // TODO
    svg = SVG_S;
  else if (props.size === 's') svg = SVG_S;
  else if (props.size === 'm') svg = SVG_M;

  return <Icon {...props}>{svg}</Icon>;
};

export default IconChat;
