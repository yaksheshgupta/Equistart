var EquistartFactory = artifacts.require("./EquistartFactory.sol");
var EquistartProject = artifacts.require("./EquistartProject.sol"); 
module.exports = function(deployer) {
  deployer.deploy(EquistartFactory);
  deployer.deploy(EquistartProject,"yakshesh","yksh",100,"0x55be5FB979fe19184c0Ccd92679876416a84BBcE");
};
