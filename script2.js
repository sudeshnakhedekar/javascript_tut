function moveCommand(direction){
    var whatHappens;
    switch(direction) {
    case "forward":
    whatHappens= "you encounter a monster";
    break;
    case "back":
    whatHappens= "you arrived home";
    break;
    case "right":
    whatHappens= "you found a river";
    break;
    case "left":
    whatHappens= "you run into a troll ";
    break;
    default:
        whatHappens ="please enter a valid direction";

}
return whatHappens;
}








//Switch operator//
//o/p
// window.moveCommand("forward");
// "you encounter a monster"
// window.moveCommand("back");
// "you arrived home"
// window.moveCommand("right");
// "you found a river"
// window.moveCommand("left");
// "you run into a troll "
// window.moveCommand(111111);
// "please enter a valid direction"//



