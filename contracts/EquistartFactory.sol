// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

//Check openzeppelin for learning more about input variables like Name, Token Amount, etc. 
//https://docs.openzeppelin.com/contracts/4.x/wizard

// import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";
import "./EquistartProject.sol";

contract EquistartFactory {
    

    uint numOfProjects;

    struct projectMeta{
        uint256 id;
        string projectName;
        string symbol;
        uint256 initialSupply;
        address contractAddress;
    }

    // projectMeta[] public deployedProjects;
    mapping(uint => projectMeta) public deployedProjects;
    
    function createProject(string memory name, string memory symbol, uint initialSupply) public {
        uint projectId = numOfProjects++;
        projectMeta storage project = deployedProjects[projectId];
        project.id = projectId;
        project.projectName = name;
        project.symbol = symbol;
        project.initialSupply = initialSupply;
        project.contractAddress = address(new EquistartProject(name, symbol, initialSupply,  msg.sender));

        // deployedProjects.push(newProject);
    }
    
    function getAllDeployedProjects () public view returns (projectMeta[] memory props){
        // return deployedProjects;
        props = new projectMeta[](numOfProjects);
        
        for (uint256 index =0; index< numOfProjects; index++){
            props[index] = deployedProjects[index];
        }
    }

    function getDeployedProject(uint256 projectId) public view returns (projectMeta memory){
        return deployedProjects[projectId];
    }
}
