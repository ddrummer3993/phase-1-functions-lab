// create function: distanceFromHqInBlocks

function distanceFromHqInBlocks(street) {
    return Math.abs(42 - street);
};

// create function: distanceFromHqInFeet 

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
};

// create function: distanceTravelledInFeet

function distanceTravelledInFeet(start, stop) {
    return Math.abs((start - stop) * 264);
}

// create function: calculatesFarePrice

function calculatesFarePrice(start, stop) {
    let fare;
    let feet = distanceTravelledInFeet(start, stop);
    if (feet <= 400) {
        fare = 0;
    } else if (feet > 400 && feet <= 2000) {
        fare = (feet - 400) * .02;
    } else if (feet > 2000 && feet <= 2500) {
        fare =  25;
    }else if (feet > 2500) {
        fare = 'cannot travel that far';
    };
    return fare;
};
