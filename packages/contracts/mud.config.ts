import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    Counter: {
      keySchema: {},
      valueSchema: "uint32",
    },
    BalanceTaable: {
      keySchema: {
        owner: "address",
        item: "uint32"
      },
      valueSchema: "uint32"
    }
  },
});
