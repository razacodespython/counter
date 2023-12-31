declare const abi: [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "who",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes4",
        "name": "fsig",
        "type": "bytes4"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "keysHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "slot",
        "type": "uint256"
      }
    ],
    "name": "SlotFound",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "who",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "slot",
        "type": "uint256"
      }
    ],
    "name": "WARNING_UninitedSlot",
    "type": "event"
  }
]; export default abi;
