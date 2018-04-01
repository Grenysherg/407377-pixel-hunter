export default (template) => {
  return document.createRange().createContextualFragment(template);
};
