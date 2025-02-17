// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract Hedgehog is ERC721, Ownable {
    address public minter;
    uint public totalSupply;

    constructor() public ERC721("Sunflower Farmers Hedgehog", "HDG") {
        minter = msg.sender;
    }

    function passMinterRole(address farm) public returns (bool) {
        require(msg.sender==minter, "You are not minter");
        minter = farm;

        return true;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(tokenId <= 7000);

        return "https://sunflower-farmers.com/play/nfts/hedgehog/metadata";
    }


    function mint(address account, uint256 amount) public {
        require(amount == 1);
        require(msg.sender == minter, "You are not the minter");
        require(totalSupply < 7000, "Only 7000 trees Hedgehog be minted");
        require(balanceOf(account) < 1 || account == minter, "A farm can only have 1 Hedgehog");

        uint256 tokenId = totalSupply + 1;
        _mint(account, tokenId);

        totalSupply = totalSupply + 1;
	}
}
