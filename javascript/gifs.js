//Click even to add button

$("#addFood").click(function () {

    newButtonText = $("#food-input").val();

    newButton = $("<button class='buttons'>" + newButtonText + "</button>");

    $(".button-container").append(newButton);

});

// $(document).ready(function () {


// });