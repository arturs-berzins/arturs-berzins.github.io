/**
 * Control the behaviour of abstract and bibtex boxes and buttons.
 */


function toggleBox(id, targetName) {
    // id: key of list entry
    // targetName: does this click event come from abstract or bibtex button?

    ['abs', 'bib'].forEach(otherName => {
      const boxElement = document.getElementById(otherName+'Box'+id);
      const btnElement = document.getElementById(otherName+'Btn'+id);
      if (otherName === targetName) {
        // Toggle visibility for the clicked box
        if (boxElement.style.display === 'none' || boxElement.style.display === ''){
          // Toggle show
          boxElement.style.display = 'block';
          btnElement.classList.add("active");
        } else {
          // Toggle hide
          boxElement.style.display = 'none';
          btnElement.classList.remove("active");
        }
      } else {
        // Hide all others
        boxElement.style.display = 'none';
        btnElement.classList.remove("active");
      }
    });
  }
  

function copyToClipboard(target) {
    const preElement = target.nextElementSibling; // select the pre element which contains the bib entry
    navigator.clipboard.writeText(preElement.innerText);
}