import { useState } from "react";
import {
  PaginationWrapper,
  PaginationList,
  PaginationBtn,
  ActiveButton,
} from "components/index";

/**
 * Pagination component for navigating through a list of items
 * @param {number} index - the current index of the selected item
 * @param {function} setIndex - function to update the index
 * @param {number} length - the total number of items in the list
 */
export const Pagination = ({ index, setIndex, length }) => {
  const [currentBtn, setCurrentBtn] = useState(index + 1);
  const screenWidth = window.innerWidth;
  const maxButtons = screenWidth < 768 ? 6 : length; // Set the maximum number of buttons to display
  const halfMaxButtons =
    // Calculates the value of halfMaxButtons based on the condition of the screenWidth.
    // If the screenWidth is less than 768, it assigns the result of Math.floor(maxButtons / 2) to halfMaxButtons,
    // otherwise it assigns the value of length to halfMaxButtons.
    screenWidth < 768 ? Math.floor(maxButtons / 2) : length;
  //
  const start =
    //calculates the starting index for a range, ensuring that it's at least 0.
    Math.max(0, index - halfMaxButtons);
  //
  const end = screenWidth < 768 ? Math.min(length, start + maxButtons) : length;

  const goForward = () => {
    /** Function to navigate to the next item in the list **/
    if (index >= length - 1) {
      return;
    }
    setIndex(index + 1);
    setCurrentBtn(currentBtn + 1);
  };

  const goBack = () => {
    /**  Function to navigate to the previous item in the list  */
    if (index <= 0) {
      return;
    }
    setIndex(index - 1);
    setCurrentBtn(currentBtn - 1);
  };

  const goToPage = (page) => {
    /**
     * Function to navigate to a specific page in the list
     * @param {number} page - the index of the page to navigate to
     */
    setIndex(page);
    setCurrentBtn(page + 1);
  };
  //

  return (
    <PaginationWrapper>
      <button onClick={goBack}>prev</button>
      <PaginationList>
        {Array.from({ length: end - start }, (_, i) =>
          start + i === index ? (
            <ActiveButton key={start + i} onClick={() => goToPage(start + i)}>
              {start + i + 1}
            </ActiveButton>
          ) : (
            <PaginationBtn key={start + i} onClick={() => goToPage(start + i)}>
              {start + i + 1}
            </PaginationBtn>
          )
        )}
      </PaginationList>
      <button onClick={goForward}>next</button>
    </PaginationWrapper>
  );
};