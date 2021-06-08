function distanceFromHqInBlocks(block){
    if(block<42){
        console.log(8);
        return 8;
    }
    else if(block>=42){
        console.log(Number.parseInt(`${block}`)-42);
        return Number.parseInt(`${block}`)-42;
    }
}
//distanceFromHqInBlocks(41);

function distanceFromHqInFeet(block){
    //264ft=1block
    const feet= Number.parseInt(distanceFromHqInBlocks(block))*264;
    console.log(feet);
    return feet;
}
//distanceFromHqInFeet(41);

function distanceTravelledInFeet(startBlock, endBlock){
    if(endBlock>=startBlock){
        console.log((endBlock-startBlock)*264);
        return (endBlock-startBlock)*264;
    }
    else if(endBlock<startBlock){
        console.log((startBlock-endBlock)*264);
        return (startBlock-endBlock)*264;
    }
}
//distanceTravelledInFeet(34, 28);

// describe('calculatesFarePrice(start, destination)', function() {
//     it('gives customers a free sample', function() {
//       expect(calculatesFarePrice(43, 44)).to.equal(0);
//     });

//     it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
//       // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
//       expect(calculatesFarePrice(34, 32)).to.equal(2.56);
//     });

//     it('charges 25 dollars for a distance over 2000 feet', function() {
//       expect(calculatesFarePrice(50, 58)).to.equal(25);
//     });

//     it('does not allow rides over 2500 feet', function() {
//       expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
//     });
//   });
// });
function calculatesFarePrice(start, destination){
    const feet= distanceTravelledInFeet(start,destination);
    if(feet<=400){
        return 0
      }
    else if(feet<=2000){
        console.log(((feet-400)*.2)+25);
        return (feet-400)*.02;
      }
    else if(feet>=2500){
        return `cannot travel that far`
      }
    else if(feet>=2000){
        return 25;
      }
}

calculatesFarePrice(42,39);