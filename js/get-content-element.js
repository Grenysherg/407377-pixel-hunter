export default (template) => {
  const containerElement = document.createElement(`div`);

  containerElement.innerHTML = template.trim();

  return containerElement.firstChild;
};
