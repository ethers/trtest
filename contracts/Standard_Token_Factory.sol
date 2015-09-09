import "Standard_Token";

contract Standard_Token_Factory {

    function createStandardToken(uint256 _initialAmount) returns (address) {

        address newTokenAddr = address(new Standard_Token(_initialAmount));
        Standard_Token newToken = Standard_Token(newTokenAddr);
        return newTokenAddr;
    }
}
