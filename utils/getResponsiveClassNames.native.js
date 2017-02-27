/**
 * At the moment just throw away all responsive classname generation here,
 * we don't have responsiveness for react-native atm.
 */
export default function getResponsiveClassNames(descriptor, propertyName, classNameLookup) {
  if (!descriptor) return null;

  const value = descriptor.mobile || descriptor;
  const result = `${propertyName}_${value}`;

  return classNameLookup
    ? (Array.isArray(result) ? result.map((c) => classNameLookup[c]) : classNameLookup[result])
    : result;
}
