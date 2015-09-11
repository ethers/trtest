contract("TokenTester", function(accounts) {

  it("TODO", function(done) {
      var tester = TokenTester.at(TokenTester.deployed_address);
      tester.tokenContractAddress.call()
      .then(function (tokenContractAddr) {
          console.log('tokenContractAddr', tokenContractAddr);

          // assert.strictEqual(result.c[0], 99);
          done();
      }).catch(done);
  });

});
