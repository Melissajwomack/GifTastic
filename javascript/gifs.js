$("#addFood").click(function () {

    newButtonText = $("#food-input").val();

    newButton = $("<button>" + newButtonText + "</button>");

    newButton.attr("class", "buttons");

    $(".button-container").append(newButton);

});

$(document).ready(function () {


});