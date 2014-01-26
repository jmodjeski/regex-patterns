
var patterns = require('../index');
var assert = require('should');

describe("email", function(){
  describe("spec", function(){
    var cases = [
      "name@example.com",
      "name@example.net",
      "name@myhost.example.io",
      "name-sample@myhost-example.com"
    ];
   
    cases.forEach(function(c){
      it("should match " + c, function(){
        patterns.email.spec.test(c).should.be.true;
      });
    });
  });
});
