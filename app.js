$(document).ready(function () {

    $("#launchModal").click();
    $("#leftSideLanguageList").hide();
    $("#rightSideLanguageList").hide();

    const textarea = document.querySelector('.translateTextarea');
    const leftSideContainer = document.querySelector('.leftSideContainer');

    textarea.addEventListener('focus', (event) => {
        leftSideContainer.classList.add("activeContainer");
    });

    textarea.addEventListener('focusout', (event) => {
        leftSideContainer.classList.remove("activeContainer");
    });



});


function onLanguageButtonClick(element) {
    if (element.id == "leftLanguageButton") {
        $("#leftSideLanguageList").show(500);
    } else if (element.id == "rightLanguageButton") {
        $("#rightSideLanguageList").show(500);
    }
}
$(document).mouseup(function (e) {
    var containerLeft = $("#leftLanguageButton");
    if (!containerLeft.is(e.target) && containerLeft.has(e.target).length === 0) {
        $("#leftSideLanguageList").hide(400);
    }

    var containerRight = $("#rightLanguageButton");
    if (!containerRight.is(e.target) && containerRight.has(e.target).length === 0) {
        $("#rightSideLanguageList").hide(400);
    }
});


