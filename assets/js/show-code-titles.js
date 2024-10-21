(function(){
  const codeElements = document.getElementsByClassName("highlight");

  for (var i = 0; i < codeElements.length; i++) {
    if (codeElements[i].title.length) {
      codeElements[i].firstChild.style.margin = 0;
      codeElements[i].firstChild.style['border-radius'] = 0;
      codeElements[i].firstChild.style['border-bottom-left-radius'] = '8px';
      codeElements[i].firstChild.style['border-bottom-right-radius'] = '8px';

      const titleNode = document.createTextNode(codeElements[i].title);
      const copyButtonNode = document.createElement('button');

      copyButtonNode.innerHTML = `copy`;
      copyButtonNode.style['float'] = 'right';
      copyButtonNode.title = 'Copy code to clipboard';

      const code = codeElements[i].childNodes[0].textContent;

      copyButtonNode.addEventListener("click", () => {
        navigator.clipboard.writeText(code.trim()).then(() => {
          copyButtonNode.innerHTML = `copied`;
          setTimeout(() => {
            copyButtonNode.innerHTML = `copy`;
          }, 1000);
        });
      });

      const newNode = document.createElement("div");

      newNode.appendChild(titleNode);
      newNode.appendChild(copyButtonNode);
      newNode.classList.add("bg-gray-700", "text-gray-200", "text-sm", "font-mono", "py-2", "px-4", "lg:py-3", "lg:px-6");
      newNode.style['border-top-left-radius'] = '8px';
      newNode.style['border-top-right-radius'] = '8px';
      newNode.style['font-weight'] = '700';

      codeElements[i].parentNode.insertBefore(newNode, codeElements[i]);
    }
  }
})();
