(function() {
  'use strict';

  new Countdown({
    selector: '.countdown',
    msgBefore: 'Game Over!',
    msgPattern: '{days} dias',
    dateEnd: new Date('Apr 19, 2015 10:00:00')
  });

  // function readJson(file) {
  //   var jsonData = JSON.parse(file);
  //   console.log(jsonData);
  //   return jsonData;
  // }

  // var request = new XMLHttpRequest();
  // request.open("GET", "../../quotes.json", false);
  // request.send(null);
  // var jsonData = JSON.parse(request.responseText);
  // console.log(jsonData.result[0]);

})();