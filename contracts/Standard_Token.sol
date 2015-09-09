import "Coin";

contract Standard_Token is Coin {

    function Standard_Token(uint _initialAmount) {
        balances[msg.sender] = _initialAmount;
    }

    event CoinTransfer(address indexed from, address indexed to, uint256 value);

    function sendCoin(uint _value, address _to) returns (bool _success) {
        if (balances[msg.sender] >= _value) {
            balances[msg.sender] -= _value;
            balances[_to] += _value;
            CoinTransfer(msg.sender, _to, _value);
            return true;
        } else { return false; }
    }

    function coinBalance() constant returns (uint _r) {
        return balances[msg.sender];
    }

    function coinBalanceOf(address _addr) constant returns (uint _r) {
        return balances[_addr];
    }

    mapping (address => uint) public balances;
}
