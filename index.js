const app = "I don't do much."

    function bumpCounter(counter) {
        function addBump() {
          //var cnt = 0;
          return counter + 1;
       }
        function getBumps() {
          counter = 1;
         return counter;
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
