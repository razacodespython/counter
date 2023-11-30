// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

import { System } from "@latticexyz/world/src/System.sol";
import { BalanceTaable } from "../codegen/index.sol";

contract MintSystem is System {
  function mint(uint32 item) public {
        uint32 balance = BalanceTaable.get(_msgSender(), item);
        BalanceTaable.set(_msgSender(), item, balance+5);
  }
}
