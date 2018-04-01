export default (clickedElement, rightElementClass) => {
  return Boolean(clickedElement.closest(rightElementClass));
};
