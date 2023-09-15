// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
//"Milo", "Otis", "Garfield"
function destructivelyAppendCat(name){
    cats.push(name)
}
//"Milo", "Otis", "Garfield",'bob'
function destructivelyPrependCat(name){cats.unshift('Bob')}
//"Milo", "Otis", "Garfield"
function destructivelyRemoveLastCat(){cats.pop()}


//, "Otis", "Garfield"
function destructivelyRemoveFirstCat() {
    cats.shift();}



function appendCat(name) {
    let newCatsArray = [...cats, name];
    return newCatsArray;
}    
appendCatpendCat('Broom')

function prependCat(name) {
    let newCatsArray = [name, ...cats];
    return newCatsArray;
}    
rependCat('Broom')





function removeLastCat() {
    return cats.slice(0, -1);
}
function removeFirstCat() {
    return  cats.slice(1);
}   
/*
    function appendCat(arr,name){
    return[...arr,name]}

appendCat(cats,'Broom')

function removeLastCat(){cats.slice(-1)}
function removeFirstCat(){cats.slice(1)}

 */


