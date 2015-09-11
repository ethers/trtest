import "Standard_Token";

contract Standard_Token_Factory {

    event TokenContractCreated(address addr);

    function createStandardToken(uint256 _initialAmount) returns (address) {
        address newTokenAddr = address(new Standard_Token(_initialAmount));
        /*TokenContractCreated(newTokenAddr);*/
        Standard_Token newToken = Standard_Token(newTokenAddr);
        newToken.foo();

        return newTokenAddr;
    }


    function simpleCall() returns (uint) {
        return 99;
    }
}
