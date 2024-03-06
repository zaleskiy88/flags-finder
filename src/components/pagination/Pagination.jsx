import { PaginationWrapper } from "components/index";

/**
 * Pagination component for navigating through a list of items
 * @param {number} index - the current index of the selected item
 * @param {function} setIndex - function to update the index
 * @param {number} length - the total number of items in the list
 */
export const Pagination = ({ index, setIndex, length }) => {
  /**
   * Function to navigate to the next item in the list
   */
  const goForward = () => {
    if (index >= length - 1) {
      return;
    }
    setIndex(index + 1);
  };

  /**
   * Function to navigate to the previous item in the list
   */
  const goBack = () => {
    if (index <= 0) {
      return;
    }
    setIndex(index - 1);
  };

  /**
   * Function to navigate to a specific page in the list
   * @param {number} page - the index of the page to navigate to
   */
  const goToPage = (page) => {
    setIndex(page);
  };

  return (
    <PaginationWrapper>
      <button onClick={goBack}>prev</button>
      <ul>
        {Array.from({ length: length }, (_, index) => (
          <button key={index} onClick={() => goToPage(index)}>
            {index + 1}
          </button>
        ))}
      </ul>
      <button onClick={goForward}>next</button>
    </PaginationWrapper>
  );
};
