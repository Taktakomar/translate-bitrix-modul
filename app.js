

document.addEventListener('DOMContentLoaded', function () {

    const textarea = document.querySelector('.translateTextarea');
    const leftSideContainer = document.querySelector('.leftSideContainer');

    textarea.addEventListener('focus', (event) => {
        leftSideContainer.classList.add("activeContainer");
    });

    textarea.addEventListener('focusout', (event) => {
        leftSideContainer.classList.remove("activeContainer");
    });


}, false);



function onKeyUP(element) {

    const textPlaceholder = document.querySelector('.textPlaceholder');

    if (element.innerText == "") {
        textPlaceholder.style.display = "block";
    } else {
        textPlaceholder.style.display = "none";
    }


}

