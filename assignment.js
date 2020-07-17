//  function for feet to miles

function feetToMile(feet){
    if(feet < 0){
        return ' Distance can not be negative';
    }
    else{
        var miles = feet * 0.000189394;
        return miles;
    }
}

//  function for wood calculation

function woodCalculator(chair, table, bed){

    if (chair < 0 || table < 0 || bed < 0 ){
        return 'Woods Property cannot be negative';
    }
    else{
        cubicWood = 1 * chair + 3 * table + 5 * bed;
        return cubicWood;
    }

}

//  function for brick calculation

function brickCalculator(building){

    if(building < 0){
        return 'build at least one stair';
    }
    
    else{
        if(building <= 10){
            var bricksTen = 15 * 1000 * building;
            return bricksTen;
        }
        
         else if(building > 10 && building <= 20){
            var bricksTweenty = 15 * 1000 * 10 + 12 * 1000 * (building - 10);
            return bricksTweenty;
         }
         else if (building > 20){
            var  bricksUpper = 15*1000*10 + 12*1000*10 + 10 * 1000 * (building - 20);
            return bricksUpper;
         }
    }
    
}

//  function for tiny friend

function tinyFriend(arr){
    let len = arr[0].length, smallest;
    for(let i = 0; i < arr.length; i++){
        let element = arr[i].length;
        if(element < len){
            len = arr[i].length;
            smallest = arr[i];
        }
    }
 return smallest;

}

// calculate feet to mile

 var calculateMiles = feetToMile(6435);
 console.log('Feet to Miles : ',calculateMiles);

 //calcute wood estimation
 var requiredWood = woodCalculator(10,2,5)
 console.log('Required cubic woods : ',requiredWood);

 //calculate required bricks
 var totalBricks = brickCalculator(25);
console.log('Required number of bricks: ',totalBricks); 

// find tiny friend
let arr = ['sharif', 'Aarif', 'salman', 'shahrukh', 'saif'];
console.log('My tiny friend: ',tinyFriend(arr));



