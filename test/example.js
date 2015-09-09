contract("Standard_Token_Factory", function(accounts) {

  it("passes", function(done) {
    Standard_Token.new(10000, {from: accounts[0]}).then(function(ctr) {
        return ctr.coinBalanceOf.call(accounts[0]);
    }).then(function (result) {
        //console.log(result);
        assert.strictEqual(result.c[0], 10000);
        done();
    }).catch(done);
  });

});
