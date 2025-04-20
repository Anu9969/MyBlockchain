# 🧱 Simple Blockchain Demo

This is a basic blockchain implementation in TypeScript, built to understand the core principles of how blockchains work from the ground up.

## ✅ Features Implemented So Far

### 1. `blockchain.ts`
- **Block structure** with:
  - Index
  - Timestamp
  - Data (transaction/message)
  - Previous hash
  - Current hash
- **Genesis block** initialization
- **SHA256 hashing** for block verification
- **Block validation** to ensure new blocks are linked and tamper-proof
- **Chain structure** to store blocks sequentially
- **Add and validate block logic** with immutability checks

> 🛠️ This forms the fundamental ledger logic of a blockchain.

## 🛣️ Next Steps (WIP)

### 2. `http.ts` (coming up)
- REST API to interact with the blockchain
- Add new blocks via HTTP requests
- View the current chain via endpoints

### 3. `p2p.ts` (coming up)
- Peer-to-peer WebSocket networking
- Sync blocks across nodes
- Propagate new blocks to connected peers

---

## 🚀 Getting Started (for current progress)

1. **Clone or create your project folder**  
   *(since this version is built from scratch, make sure you’ve initialized a Node.js + TypeScript setup)*

2. **Install dependencies**  
   ```bash
   npm install crypto-js
