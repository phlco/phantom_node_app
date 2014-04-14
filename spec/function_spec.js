describe("functions", function(){
  it("is a first class citizen", function(){
    var citizen = function(){};
    expect( typeof citizen ).toEqual("function");
  });
  it("can get funky", function(){
    var danceMove = getFunky();
    expect( danceMove ).toEqual("breakdance!");
  });
});
