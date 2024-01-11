// function Player(name, marker)
// {
//     this.name = name;
//     this.marker = marker;
//     this.SayName = function(){
//         console.log(name);
//     }
// }

// const Player1 = new Player('john', 'X');
// const Player2 = new Player("Duck","Alive");

// Player1.SayName();
// Player2.SayName();

// Player.prototype.SayName = function()
// {
//     console.log("Hello I'm a player");  
// }
// Player1.SayName();
// Player2.SayName();

function Person(name, age)
{
    this.name = name;
    this.age = age;
}
const B = new Person("B", 20);  
Person.prototype.nationlity = "Indian";
console.log(B);
console.log(B.nationlity);