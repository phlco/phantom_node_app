describe("functions", function(){

  describe("declarative functions", function(){
    it("is loaded before any code is executed.", function(){
      expect( vamanos ).toBeDefined();
      function vamanos(){ return "let's go!" }
    });
  });

  describe("function expression", function(){
    it("loads only when the interpreter reaches that line of code", function(){
      expect( ohMyGolly ).toBeUndefined();
      var ohMyGolly = function(){ return "oh my golly!" }
    });
  });

});
