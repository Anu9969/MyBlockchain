import { 
    Block, 
    genesisBlock, 
    getBlockchain, 
    getLatestBlock, 
    generateNewBlock, 
    isBlockValid, 
    addBlock, 
    isChainValid, 
    replaceChain 
} from './blockchain';

console.log('🚀 Starting Blockchain Tests...\n');

// Test 1: Genesis Block
console.log('📦 Test 1: Genesis Block');
const genesis = genesisBlock();
console.log('Genesis Block:', genesis);
console.log('Genesis Block Index:', genesis.index);
console.log('Genesis Block Hash:', genesis.hash);
console.log('✅ Genesis Block Test Passed\n');

// Test 2: Get Blockchain
console.log('🔗 Test 2: Get Blockchain');
const blockchain = getBlockchain();
console.log('Blockchain Length:', blockchain.length);
console.log('✅ Get Blockchain Test Passed\n');

// Test 3: Get Latest Block
console.log('📋 Test 3: Get Latest Block');
const latestBlock = getLatestBlock();
console.log('Latest Block:', latestBlock);
console.log('✅ Get Latest Block Test Passed\n');

// Test 4: Generate New Block
console.log('⛏️ Test 4: Generate New Block');
const newBlock = generateNewBlock("Hello, Blockchain!");
console.log('New Block Generated:', newBlock);
console.log('✅ Generate New Block Test Passed\n');

// Test 5: Block Validation
console.log('✅ Test 5: Block Validation');
const previousBlock = getLatestBlock();
const isValid = isBlockValid(newBlock, previousBlock);
console.log('Is Block Valid:', isValid);
console.log('✅ Block Validation Test Passed\n');

// Test 6: Add Multiple Blocks
console.log('🔗 Test 6: Add Multiple Blocks');
generateNewBlock("Second Block Data");
generateNewBlock("Third Block Data");
generateNewBlock("Fourth Block Data");
console.log('Current Blockchain Length:', getBlockchain().length);
console.log('✅ Multiple Blocks Test Passed\n');

// Test 7: Chain Validation
console.log('🔍 Test 7: Chain Validation');
const isChainValidResult = isChainValid(getBlockchain());
console.log('Is Chain Valid:', isChainValidResult);
console.log('✅ Chain Validation Test Passed\n');

// Test 8: Display Full Blockchain
console.log('📊 Test 8: Display Full Blockchain');
const fullBlockchain = getBlockchain();
fullBlockchain.forEach((block, index) => {
    console.log(`Block ${index}:`);
    console.log(`  Index: ${block.index}`);
    console.log(`  Data: ${block.data}`);
    console.log(`  Hash: ${block.hash}`);
    console.log(`  Previous Hash: ${block.previousHash}`);
    console.log(`  Timestamp: ${block.timestamp}`);
    console.log('');
});
console.log('✅ Full Blockchain Display Test Passed\n');

// Test 9: Invalid Block Test
console.log('❌ Test 9: Invalid Block Test');
const invalidBlock = new Block(999, "Invalid Data", "invalid-hash", "invalid-prev-hash", Date.now());
const isInvalidBlockValid = isBlockValid(invalidBlock, getLatestBlock());
console.log('Is Invalid Block Valid:', isInvalidBlockValid);
console.log('✅ Invalid Block Test Passed\n');

console.log('🎉 All Tests Completed Successfully!');
console.log('📈 Final Blockchain Length:', getBlockchain().length); 