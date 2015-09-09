contract("Standard_Token_Factory", function(accounts) {

  it("factory call", function(done) {
      var factory = Standard_Token_Factory.at(Standard_Token_Factory.deployed_address);
      factory.createStandardToken.call()
      .then(function (result) {
          console.log('RESULT', result);
          assert.strictEqual(result.c[0], 99);
          done();
      }).catch(done);
  });

  it("caller creates new token and has correct initial balance", function(done) {
      var factory = Standard_Token_Factory.at(Standard_Token_Factory.deployed_address);
      factory.createStandardToken({from: accounts[0]})
      .then(function(tokenContractAddr) {
          console.log('tokenContractAddr: ', tokenContractAddr)
          var newToken = Standard_Token.at(tokenContractAddr, {gas: 3141592, gasLimit: 3141592});

          return newToken.foo.call();  // Error: invalid address ??
      }).then(function (result) {
          console.log('RESULT', result);
          assert.strictEqual(result.c[0], 15);
          done();
      }).catch(done);
  });


  it("calls foo.  this passes", function(done) {
    Standard_Token.new({from: accounts[0]}).then(function(ctr) {
        return ctr.foo.call();
    }).then(function (result) {
        // console.log('RESULT', result);
        assert.strictEqual(result.c[0], 15);
        done();
    }).catch(done);
  });
});
