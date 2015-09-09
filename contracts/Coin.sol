contract Coin {
    function sendCoin(uint _value, address _to) returns (bool _success) {}
    function coinBalance() constant returns (uint _r) {}
    function coinBalanceOf(address _addr) constant returns (uint _r) {}
}
