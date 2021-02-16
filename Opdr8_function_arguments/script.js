// No arguments
const wallPaint = function () {
    console.log("The wall has been painted red");
};
wallPaint();

// Single argument
const wallPaint = function (color) {
    console.log("The wall has been painted " + color);
};
wallPaint("green");
wallPaint("blue");
wallPaint();        // calling the function without an argument gives undefined

// Multiple arguments
const wallPaint = function (color, wall) {
    console.log("The " + wall + " wall has been painted " + color);
};
wallPaint("north", "orange");
wallPaint("orange", "north");
// the order of the arguments matter when calling, the second call gives no correct output
// the order of the arguments in the function definition matters
// changing the order in the function definition and calling, the second call gives a correct output
// conclusion: the order of the arguments in the function definition and by calling has to be te same if you want a correct output