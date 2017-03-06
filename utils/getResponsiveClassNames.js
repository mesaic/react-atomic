// @flow
import _map from 'lodash/map';
import _isPlainObject from 'lodash/isPlainObject';

const createClassNameLookupWithCatchFn = (classNameLookup) => (className: *): * => {
  const cls = classNameLookup[className];
  if (!cls) {
    console.error(`Classname '${className}' was not found; found values are '${Object.keys(classNameLookup).join(', ')}`); // eslint-disable-line no-console
    return '';
  } else {
    return cls;
  }
};
/**
 * @param descriptor:
 *    A responsive descriptor, that is either a value (e.g. `20` or `"flex-start"`)
 *    or a mapping from breakpoints to values (`{mobile: 20, desktop: 40}`).
 *    Available breakpoints: mobile, mobileLarge, tablet, desktop
 *    xs, sm, md, lg
 */
export default function getResponsiveClassNames(descriptor: *, propertyName: *, classNameLookup: *): * {
  if (typeof descriptor === 'undefined' || descriptor === null) return null;

  const result = _isPlainObject(descriptor)
    // flow-disable-next-line
    ? _map(descriptor, (value, breakpoint) =>
      breakpoint === 'mobile'
        ? `${propertyName}-${value}` // mobile is the default, so it has no breakpoint suffix (not within a media query)
        : `${propertyName}-${value}-${breakpoint}`)

    // default style without responsiveness
    : `${propertyName}-${descriptor}`;

  if (classNameLookup) {
    const classNameLookupWithCatch = createClassNameLookupWithCatchFn(classNameLookup);
    return Array.isArray(result)
      ? result.map(classNameLookupWithCatch)
      : classNameLookupWithCatch(result);
  } else {
    return result;
  }
}

