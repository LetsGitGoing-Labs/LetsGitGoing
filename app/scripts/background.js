//Just an example function from another repo

var background = (function(){
  function returnsFive(){
    return 5;
  }

  function five(){
    return returnsFive();
  }

  return {
    five: five
  };
})();
