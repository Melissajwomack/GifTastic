var foodArr = ["pizza", "hamburger", "spaghetti", "ice cream", "donut", "fries", "hot dog"];

$(document).ready(function () {

    function buttonsFunction() {
        for (var i = 0; i < foodArr.length; i++) {
            newButton = $("<button>");
            newButton.attr("class", "buttons");
            newButton.attr("data-food", foodArr[i]);
            newButton.text(foodArr[i]);
            $(".button-container").append(newButton);
        };
    };

    buttonsFunction();

    //Click event to add button
    $("#addFood").click(function () {
        $(".button-container").empty();
        event.preventDefault();
        newButtonText = $("#food-input").val().trim();
        foodArr.push(newButtonText);
        buttonsFunction();
        $("#food-input").val("");
    });

    $(document.body).on("click", ".buttons", function () {
        var food = $(this).attr("data-food");
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=dGfiE2c3mUZUhNtQ99HWn3qzCDW1GTir&limit=10";

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            var results = response.data
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                var newDiv = $("<div>");
                var newImgDiv = $("<img>");
                var newRatingDiv = $("<p>");

                newDiv.attr("class", "newDiv");

                newImgDiv.attr("src", results[i].images.fixed_height_still.url);
                newImgDiv.attr("data-still", results[i].images.fixed_height_still.url);
                newImgDiv.attr("data-animate", results[i].images.fixed_height.url);
                newImgDiv.attr("class", "gif");

                console.log(newImgDiv);

                newRatingDiv.html(
                    "<u>Rating:</u> " + results[i].rating + "<br>" + "<u>Title:</u> " + results[i].title + "<br>"
                );
                
                newDiv.append(newRatingDiv);
                newDiv.append("<hr class='hr2'>");
                newDiv.append(newImgDiv);
                
                $(".gif-container").prepend(newDiv);
            }

        });
    });

    $(document.body).on("click", ".gif", function () {
        var state = $(this).attr("data-state");
        if (state === "animate") {
            $(this).attr("src", $(this).data("still"));
            $(this).attr("data-state", "still");
        }
        else {
            $(this).attr("src", $(this).data("animate"));
            $(this).attr("data-state", "animate"); 
        }
    });
});