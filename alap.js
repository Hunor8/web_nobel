fetch ("https://api.nobelprize.org/v1/prize.json")
.then(x=>x.json())
.then(y=>megjelnit(y))

function megjelnit(y){
    console.log(y)
}