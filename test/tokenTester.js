contract("TokenTester", function(accounts) {

  it("TODO", function(done) {
      var tester = TokenTester.at(TokenTester.deployed_address);
      // tester.getTokenContractAddress({from: accounts[0]})
      tester.getTokenContractAddress.call({gas: 3141592, gasLimit: 3141592})
      .then(function (result) {
          console.log('RESULT', result);
          // assert.strictEqual(result.c[0], 99);
          done();
      }).catch(done);
  });

});
