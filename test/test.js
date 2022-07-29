const { assert } = require("chai");
const equistartProject = artifacts.require("EquistartProject");
contract("EquistartProject", (accounts) => {
    it("test", () => {
        return equistartProject.deployed().then(instance => {
            EProject = instance
            // return EProject.hff()
            // return EProject.buy.call(10,{from:accounts[0]})
            return EProject.transfer(accounts[1],25)
            // return EProject.createGeneralProposal("header","discription")

        }).then(res=>{
            // assert.equal(res.logs.length,1,"1 event emmited")
            assert.equal(res.logs.length,1,"1 event emmited")
            assert.equal(res.logs[0].event,"Transfer","should be the transfer event")
            assert.equal(res.logs[0].args.from,accounts[0],"account _from")
            assert.equal(res.logs[0].args.value,25,"_amount")
            assert.equal(res.logs[0].args.to,accounts[1],"account _to")
            // console.log(res);
            return EProject.createGeneralProposal("header","dis",{from:accounts[1]})
            // return EProject.balanceOf(accounts[0]) 
        }).then(res=>{
            assert.equal(res.logs.length,1,"1 event emmited")
            assert.equal(res.logs[0].event,"NewGeneralProposal","should be the NewGeneralProposal event")
            assert.equal(res.logs[0].args.proposer,accounts[1],"account account-1")
        })
    })
    it("checking vote",()=>{
        return equistartProject.deployed().then(instance => {
            EProject = instance
            return EProject._vote(0,true,{from:accounts[1]})
        }).then(res=>{
            assert.notEqual(res.receipt.gasUsed,0,"not done voting")//jugadh to check if vote transaction if done or not
            // console.log(res);
        })
    })
    it("getAllProposals",()=>{
        return equistartProject.deployed().then(instance => {
            EProject = instance
            return EProject.getAllProposals()
        }).then(res=>{
            console.log(res);// see all proposals
        })
    })
    it("getGeneralProposal",()=>{
        return equistartProject.deployed().then(instance => {
            EProject = instance
            return EProject.getGeneralProposal(0,{from:accounts[1]})
        }).then(res=>{
            console.log(res);
        })
    })
    it("getVotingHistory",()=>{
        return equistartProject.deployed().then(instance => {
            EProject = instance
            return EProject.getVotingHistory({from:accounts[1]})
        }).then(res=>{
            console.log(res);
        })
    })
})