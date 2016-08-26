const app = "I don't do much."

//function closures(counter){
  //function threePointTurn() {
    function bumpCounter(counter) {
        function addBump() {
          //var cnt = 0;
          return counter + 1;
       }
        function getBumps() {
          var cnt = 0;
         return cnt = counter;
      }
      return {addBump, getBumps}
    }

  function createAnimal(animalType) {
    return function(deadlyDevice) {
      return { animalType: animalType, deadlyDevice: deadlyDevice }
    }

  }
  var sharkCreator = createAnimal('Shark');
  var sharkWithFrickinLaserbeam = createAnimal({'Shark': 'Laserbeam'});
  var sharkWithFrickinCannon = createAnimal({'Shark': 'Cannon'});
