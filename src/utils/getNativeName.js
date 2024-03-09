export const getNativeName = (names) => {
  /** Retrieves the native name from the input names object.
   * @param {Object} names - the names object containing all names
   * @return {Object} - the oficcial native name & common native name
   */

  if (
    names.nativeName.hasOwnProperty("eng") &&
    Object.keys(names.nativeName).length === 1
  ) {
    return names.nativeName.eng;
  }
  const { eng, ...namesObj } = names.nativeName;
  const nativeName = Object.values(namesObj)[0];

  return nativeName;
};
