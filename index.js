"use strict"
// randomly select destination, restaurant, transport, and entertainment,
// able to redo random choice. 
// confirm completed trip then print it too the console. 


// created our arrays 

let destinations = ["Bisbee", "Tombstone", "Flagstaff", "Williams", "Yuma"];
let restaurants = ["Fast-Food", "Fine-Dining","Mom and Pop"];
let transportation = ["Bus", "Pesonal Vehicle", "Rental Car", "Carpool"];
let entertainment = ["Tourist-site", 'Show', 'Urban-Exploration', "Trainride", "Hiking"];

// function for pulling a random destination
function getDestination () {
  let confirmed = false;
  let destinationNotWanted = '';

  while(confirmed === false){
    let randNum = Math.floor(Math.random() * destinations.length);
    let randDestinations = destinations[randNum];
    let userConfirm = '';
    if(randDestinations !== destinationNotWanted){
      userConfirm = prompt(`Your destination is ${randDestinations}, Is this destination exceptable? (y/n):`);
   }
    if (userConfirm == "y") {
    confirmed = true;
    return randDestinations;
    } else {
      destinationNotWanted = randDestinations;
    }
  }
}
// function for pulling a random restaurants
function getRestaurants () {
  let confirmed = false;
  let restaurentNotWanted = '';

  while(confirmed === false){
    let randNum = Math.floor(Math.random() * restaurants.length);
    let randRestaurants = restaurants[randNum];
    let userConfirm = '';
    if(randRestaurants !== restaurentNotWanted){
      userConfirm = prompt(`Your restaurants is ${randRestaurants}, Is this restaurant exceptable? (y/n):`);
    }
    if (userConfirm == "y") {
    confirmed = true;
    return randRestaurants;
    } else {
      restaurentNotWanted = randRestaurants;
    }
  }
}

// function for pulling the trasportation
function getTransportation () {
  let confirmed = false;
  let transportNotWanted = '';
  while(confirmed === false){
    let randNum = Math.floor(Math.random() * transportation.length);
    let randTrasportation = transportation[randNum];
    let userConfirm = '';
    if(randTrasportation !== transportNotWanted){
       userConfirm = prompt(`Your trasportation is ${randTrasportation}, Is this trasportaion exceptable? (y/n):`);
    }

    if (userConfirm == "y") {
    confirmed = true;
    return randTrasportation;
    } else {
      transportNotWanted = randTrasportation;
    }
  }
}

// function for pulling the entertainment
function getEntertainment () {
  let confirmed = false;
  let entertainmentNotWanted = '';

  while(confirmed === false){
    let randNum = Math.floor(Math.random() * entertainment.length);
    let randEntertainment = entertainment[randNum];
    let userConfirm = '';
    if(randEntertainment !== entertainmentNotWanted){
       userConfirm = prompt(`Your entertainment is ${randEntertainment}, Is this entertainment exceptable? (y/n):`);
    }
    if (userConfirm == "y") {
    confirmed = true;
    return randEntertainment;
    } else {
      entertainmentNotWanted = randEntertainment;
    }
  }
}
// Ending function that puts it all together. 
function getTrip () {
  let confirmed = false;
  while(confirmed === false){
    let destination = getDestination();
    let restaurant = getRestaurants();
    let transport = getTransportation();
    let entertainment = getEntertainment();
    let userConfirm = prompt(`This is your trip ${destination}, ${restaurant}, ${transport}, ${entertainment}. Confirm your trip? (y/n):`)

    if(userConfirm == 'y'){
      confirmed = true;
      console.log(`Your trip of ${destination}, ${restaurant}, ${transport}, ${entertainment} Has been confirmed have a good trip.`)
    }
  }
}

getTrip();

