// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "../openzeppelin-solidity/contracts/crowdsale/crowdsale.sol";
contract test is Crowdsale{
    constructor (uint rate,address payable wallet,ERC20 token) Crowdsale(rate,wallet,token){
    }
}