import "Standard_Token";

contract Standard_Token_Factory {

    function createStandardToken() returns (address) {

        address newTokenAddr = address(new Standard_Token());
        Standard_Token newToken = Standard_Token(newTokenAddr);
        return newTokenAddr;
    }
}
