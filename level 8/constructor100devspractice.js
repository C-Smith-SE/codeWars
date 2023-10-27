function MakeCar(carMake,carmodel,carColor,numOfDoors){
    this.make = carMake
    this.modle = carmodel
    this.color = carColor
    this.doors = numOfDoors
    this.honk = function(){
        alert('beep beep')
    }
    this.lock = function(){
        alert( `Locked ${this.doors} doors!`)
    }
}

let hondaCivic = new MakeCar('Honda','Civic','Silver', 4)

let teslaRoadster = new MakeCar('Tesla','Roadster','red', 2)


// if we want to add something to the original constructer we can use .prototype

ex: MakeCar.prototype.blueTooth = true


// 100 devs practice problem:

// Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeCharacter(charName,charSex,charHeight,charColor){
    this.name = charName
    this.sex = charSex
    this.height = charHeight
    this.color = charColor
    this.punch = function(){
        alert('get punched')
    }
    this.kick = function(){
        alert('get kicked')
    }
    this.duck = function(){
        alert('crouch')
    }
}

let ryu = new MakeCharacter('ryu','male','5 2"','white')



// create a tony hawk pro skater constructor that makes skating game characters with 4 properties and 3 methods.

function MakeSkateBoarder(charGender,charHeight,charWeight,charBoard){
    this.gender = charGender
    this.heigh = charHeight
    this.weight = charWeight
    this.board = charBoard
    this.specialMove = function(){
        alert(`I just landed my special!`)
    }
    this.ollie = function(){
        alert('do a ollie')
    }
    this.kickflip = function(){
        alert('do a kickflip')
    }
} let newSkater1 = new MakeSkateBoarder('male','5 "2','150ibs','newboard')