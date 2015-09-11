contract Standard_Token {

  function Standard_Token(uint _initialAmount) {
      balances[msg.sender] = _initialAmount;
  }

    function foo() constant returns (uint _r) {
        return 15;
    }

    mapping (address => uint) public balances;
}
