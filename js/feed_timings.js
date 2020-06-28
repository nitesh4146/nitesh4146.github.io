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

var d = new Date();
var key = d.getDate().toString() + d.getMonth().toString() + d.getFullYear().toString();
// var key = "3062020";
// var key = "3162020";



// database.ref('/feed_table/' + key).set({
//     meal1_feed1: false,
//     meal1_feed2: false,
//     meal1_feed3: false,
//     meal2_feed1: false,
//     meal2_feed2: false,
//     meal2_feed3: false,
//     meal3_feed1: false,
//     meal3_feed2: false,
//     meal3_feed3: false,
// });


var ref = database.ref('/feed_table/');

// Attach an asynchronous callback to read the data at our posts reference
ref.on("child_changed", function(snapshot, d) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

var all_meals_points = new Array(3); 
for (var i = 0; i < 3; i++) { 
    all_meals_points[i] = []; 
}

// for (var i = 0; i < 3; i++) { 
//     for (var j = 0; j < 3; j++) { 
//         all_meals_points[i][j] = false; 
//     } 
// } 


var ref_key = database.ref('/feed_table/' + key);

ref_key.once("value", function(data) {

    if (data.val()){
        all_meals_points[0][0] = data.val().meal1_feed1;
        all_meals_points[0][1] = data.val().meal1_feed2;
        all_meals_points[0][2] = data.val().meal1_feed3;
        all_meals_points[1][0] = data.val().meal2_feed1;
        all_meals_points[1][1] = data.val().meal2_feed2;
        all_meals_points[1][2] = data.val().meal2_feed3;
        all_meals_points[2][0] = data.val().meal3_feed1;
        all_meals_points[2][1] = data.val().meal3_feed2;
        all_meals_points[2][2] = data.val().meal3_feed3;
    }else{
        for (var i = 0; i < 3; i++) { 
            for (var j = 0; j < 3; j++) { 
                all_meals_points[i][j] = false; 
            } 
    } 
    }
    // console.log(data.val().meal1_feed1);

    for (var meal = 1; meal <= 3; meal++) {
        for (var feed_point = 1; feed_point <= 3; feed_point++) {
            var checkBox = document.getElementById("meal" + meal.toString() + "_feed" + feed_point.toString());
            checkBox.checked = all_meals_points[meal-1][feed_point-1];
            if (all_meals_points[meal-1][feed_point-1])
                checkBox.disabled = true;
                checkBox.
        }
    }   

});




function myFunction() {

    var text = document.getElementById("text");
    document.getElementById("text").innerHTML = key;
    
    for (var meal = 1; meal <= 3; meal++) {
        for (var feed_point = 1; feed_point <= 3; feed_point++) {
            var checkBox = document.getElementById("meal" + meal.toString() + "_feed" + feed_point.toString());
            if (checkBox.checked == true){
                text.style.display = "block";
                checkBox.disabled = true;
                all_meals_points[meal-1][feed_point-1] = true;
            }
        }
    }
    // console.log(all_meals_points);

    database.ref('/feed_table/' + key).set({
        // pkey: parseInt(key),
        meal1_feed1: all_meals_points[0][0],
        meal1_feed2: all_meals_points[0][1],
        meal1_feed3: all_meals_points[0][2],
        meal2_feed1: all_meals_points[1][0],
        meal2_feed2: all_meals_points[1][1],
        meal2_feed3: all_meals_points[1][2],
        meal3_feed1: all_meals_points[2][0],
        meal3_feed2: all_meals_points[2][1],
        meal3_feed3: all_meals_points[2][2],
    });
}
