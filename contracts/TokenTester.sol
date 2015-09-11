import "Standard_Token";
import "Standard_Token_Factory";

contract TokenTester {
    address tokenContractAddress;

    /*function writeTokenContractAddress() {*/
    function TokenTester() {
        address factoryAddr = address(new Standard_Token_Factory());
        Standard_Token_Factory tokenFactory = Standard_Token_Factory(factoryAddr);

        address tcAddr = tokenFactory.makeT();

        tokenContractAddress = tcAddr;

        /*Standard_Token tokenContract = Standard_Token(tcAddr);
        return tokenContract.foo();*/
    }
}
