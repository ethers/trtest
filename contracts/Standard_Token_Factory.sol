import "Standard_Token";

contract Standard_Token_Factory {

    event TokenContractCreated(address addr);


    function createStandardToken() {
        address newTokenAddr = address(new Standard_Token(33));
        TokenContractCreated(newTokenAddr);
        /*Standard_Token newToken = Standard_Token(newTokenAddr);*/
    }

    function makeT() returns (address) {
        address newTokenAddr = address(new Standard_Token(777));
        /*TokenContractCreated(newTokenAddr);*/
        Standard_Token newToken = Standard_Token(newTokenAddr);
        newToken.foo();

        return newTokenAddr;
    }


    function simpleCall() returns (uint) {
        return 99;
    }
}
