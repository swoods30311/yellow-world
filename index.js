var sales = 123456789;
var course = "Typescript";
var is_published = true;
var level; //Ts refs to this var of Type 'any'
//Param 'document' implicitly has an any type 
function render(document) {
    console.log(document);
}
