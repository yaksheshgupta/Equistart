const { assert } = require("chai");
const equistartFactory = artifacts.require("EquistartFactory");
contract("EquistartFactory", (accounts) => {
    it("test",()=>{
        return equistartFactory.deployed().then(instace=>{
            Efactory=instace
            return Efactory.createProject("yakshesh","yksh",100)
        }).then(res=>{
            assert.notEqual(res.tx,"0x00","not deployed")
            // console.log(res);
            return Efactory.getAllDeployedProjects()
        }).then(res=>{
            console.log(res);
        })
    })
})