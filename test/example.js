contract("Standard_Token_Factory", function(accounts) {

  // it("factory call", function(done) {
  //     var factory = Standard_Token_Factory.at(Standard_Token_Factory.deployed_address);
  //     factory.simpleCall.call()
  //     .then(function (result) {
  //         console.log('RESULT', result);
  //         assert.strictEqual(result.c[0], 99);
  //         done();
  //     }).catch(done);
  // });

  it("caller creates new token and has correct initial balance", function(done) {
    // console.log(web3)

      var factory = Standard_Token_Factory.at(Standard_Token_Factory.deployed_address);


    // var rvalFilter = factory.TokenContractCreated(null,
    //   { fromBlock: 'latest', toBlock: 'latest'});
    //
    // console.log('@@@@ rvalFilter:', rvalFilter)
    //
    // rvalFilter.watch(function(err, res) {
    //   try {
    //     if (err) {
    //       callback(err);
    //       console.log('@@@ rvalFilter err: ', err)
    //       return;
    //     }
    //
    //     console.log('@@@ rvalFilter res: ', res)
    //
    //     var eventArgs = res.args;
    //
    //     console.log('@@@@@ eventArgs.rval: ', eventArgs.rval)
    //
    //     done();
    //
    //     // var ticketId = eventArgs.rval.toNumber();
    //     // if (ticketId > 0) {
    //     //   callback(null, ticketId);
    //     // }
    //     // else {
    //     //   callback('Offer could not be created');
    //     // }
    //   }
    //   finally {
    //     console.log('@@@ filter stopWatching...')
    //     rvalFilter.stopWatching();
    //   }
    // });


      factory.createStandardToken({from: accounts[0]}).then(function(tx) {
          console.log('@@@@ tx: ', tx)
          var receipt = web3.eth.getTransactionReceipt(tx);

          console.log('@@@@ receipt: ', receipt)

          var logs = receipt.logs;
          console.log('@@@@ logs: ', logs)
      });

      // .then(function(tx) {
      //     console.log('@@@@ tx: ', tx)
      //
      //     var rec = web3.eth.getTransactionReceipt(tx);
      //     console.log('@@@@ rec: ', rec)
      //
      //     var newToken = Standard_Token.at(tx, {gas: 3141592, gasLimit: 3141592});
      //
      //     return newToken.foo.call();  // Error: invalid address ??
      // }).then(function (result) {
      //     console.log('RESULT', result);
      //     assert.strictEqual(result.c[0], 15);
      //     done();
      // }).catch(done);
  });


  // it("calls foo.  this passes", function(done) {
  //   Standard_Token.new({from: accounts[0]}).then(function(ctr) {
  //       return ctr.foo.call();
  //   }).then(function (result) {
  //       // console.log('RESULT', result);
  //       assert.strictEqual(result.c[0], 15);
  //       done();
  //   }).catch(done);
  // });
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
