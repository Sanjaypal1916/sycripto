// SPDX-License-Identifier: UNLICENSED
pragma solidity  ^0.8.0;

contract Transaction{

    uint256 transactionCounter;

    event transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct transferStruct{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    transferStruct[] transact;


    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public{
        transactionCounter += 1;
        transact.push(transferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
        emit transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransaction() public view returns(transferStruct[] memory){
        return transact;
    }

    function getTransactionCount() public view returns (uint256 ){
        return transactionCounter;
    }

}

