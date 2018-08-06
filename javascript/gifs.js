

$(document).ready(function () {
    //Click even to add button

    $("#addFood").click(function () {

        newButtonText = $("#food-input").val();
        newButton = $("<button class='buttons'>" + newButtonText + "</button>");
        newButtonTextVal = newButtonText;
        newButton.attr("data-food", newButtonTextVal);
        $(".button-container").append(newButton);

    });

    $("buttons").click(function () {

        var food = $(this).attr("data-food");
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=dGfiE2c3mUZUhNtQ99HWn3qzCDW1GTir&limit=10";

        $.ajax({url: queryUrl, 
            method: "GET"
        }).then(function (response) {
            var results = response.data
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                var newDiv = $("<div>");
                var newImgDiv = $("<img>");
                var newRatingDiv = $("<p>");

                newDiv.attr("class", "newDiv");

                newImgDiv.attr("src", results[i].images.fixed_height.url);
                newRatingDiv.text("Rating: " + results[i].rating);


                newDiv.append(newRatingDiv);
                newDiv.append(newImgDiv);
                $(".gif-container").prepend(newDiv);
            }

        });
    });
});