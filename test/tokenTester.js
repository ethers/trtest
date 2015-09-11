contract("TokenTester", function(accounts) {

  it("TODO", function(done) {
      var tester = TokenTester.at(TokenTester.deployed_address);
      tester.writeTokenContractAddress({from: accounts[0], gas: 3141592, gasLimit: 3141592})
      .then(function (tx) {
          console.log('tx', tx);

          var testerAddr = TokenTester.deployed_address;
          var tcAddr = web3.eth.getStorageAt(testerAddr, 0);

          console.log('tcAddr: ', tcAddr)

          // assert.strictEqual(result.c[0], 99);
          done();
      }).catch(done);
  });

});
