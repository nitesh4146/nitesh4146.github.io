const database = firebase.database();

var meal1_feed1 = document.getElementById("meal1_feed1");
var meal1_feed2 = document.getElementById("meal1_feed2");
var meal1_feed3 = document.getElementById("meal1_feed3");
var meal2_feed1 = document.getElementById("meal2_feed1");
var meal2_feed2 = document.getElementById("meal2_feed2");
var meal2_feed3 = document.getElementById("meal2_feed3");
var meal3_feed1 = document.getElementById("meal3_feed1");
var meal3_feed2 = document.getElementById("meal3_feed2");
var meal3_feed3 = document.getElementById("meal3_feed3");

database.ref('/feed_table/' + d.getDate().toString() + d.getMonth().toString()).set({
    meal1_feed1: false,
});

function myFunction() {
    var d = new Date();

    var text = document.getElementById("text");
    var all_meals_points = [];
    document.getElementById("text").innerHTML = d.getDate().toString() + d.getMonth().toString();
    
    for (var meal = 1; meal <= 3; meal++) {
        for (var feed_point = 1; feed_point <= 3; feed_point++) {
            var checkBox = document.getElementById("meal" + meal.toString() + "_feed" + feed_point.toString());
            if (checkBox.checked == true){
                text.style.display = "block";
                checkBox.disabled = true;
                // "meal" + meal.toString() + "_feed" + feed_point.toString(): true;
                
            }
        }
    }
    
}