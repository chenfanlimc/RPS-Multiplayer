
var userOne = "";
var userTwo = "";


$(document).ready(function () {

    var game = {
        beginGame: function(){
            var rock1 = $("<button>").text("Rock");
            var paper1 = $("<button>").text("Paper");
            var scissor1 = $("<button>").text("Scissor");
            var rock2 = $("<button>").text("Rock");
            var paper2 = $("<button>").text("Paper");
            var scissor2 = $("<button>").text("Scissor");
            $(".player-1-choices").append(rock1);
            $(".player-1-choices").append(paper1);
            $(".player-1-choices").append(scissor1);
            $(".player-2-choices").append(rock2);
            $(".player-2-choices").append(paper2);
            $(".player-2-choices").append(scissor2);
        }

    }


    //okay, you're gonna...set the players based on the input in text input field
    $("#add-user").on("click", function (response) {
        response.preventDefault();
        if (userOne === "") {
            userOne = $("#user-name").val();
            $(".player-1-info").empty();
            $(".player-1-info").text("Player One: " + userOne);
        } else if(userOne !== "" && userTwo === ""){
            userTwo = $("#user-name").val();
            $(".player-2-info").empty();
            $(".player-2-info").text("Player Two: " + userTwo);
            game.beginGame();
        } else if(userOne !== "" && userTwo !== ""){
            $(".result-info").text("You can't add a third player! This is a two player game.")
        }
    })



})