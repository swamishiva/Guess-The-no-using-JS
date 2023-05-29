console.log("Guess the no using js")
//math.random is used to generate random no
let guess=Math.random()*10

// math.round is used to round of the generated no
let round=Math.round(guess)

// take input from user
let no
let chances=0
while(no!=round)
{
    no=prompt("enter your guess")
    no=Number.parseInt(no)
    chances++

}
console.log("To Guess The right no you have taken ",chances ," chances")

