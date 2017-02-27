import {PropTypes} from 'react';

export default (type) => {
  return PropTypes.oneOfType([
    PropTypes.shape({
      mobile: type,
      mobileLarge: type,
      tablet: type,
      desktop: type,
    }),

    type,
  ]);
};

