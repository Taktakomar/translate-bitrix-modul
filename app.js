$( document ).ready(function() {

    $( "#launchModal" ).click();

    const textarea = document.querySelector('.translateTextarea');
    const leftSideContainer = document.querySelector('.leftSideContainer');

    textarea.addEventListener('focus', (event) => {
        leftSideContainer.classList.add("activeContainer");
    });

    textarea.addEventListener('focusout', (event) => {
        leftSideContainer.classList.remove("activeContainer");
    });

});
