import "Standard_Token";

contract Standard_Token_Factory {

    event TokenContractCreated(address addr);


    function createStandardToken() {
        address newTokenAddr = address(new Standard_Token());
        TokenContractCreated(newTokenAddr);
        /*Standard_Token newToken = Standard_Token(newTokenAddr);*/
    }

    function simpleCall() returns (uint) {
        return 99;
    }
}
