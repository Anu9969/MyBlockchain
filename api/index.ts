import express from 'express';
import cors from 'cors';
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
} from '../src/blockchain';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/blockchain', (req, res) => {
    try {
        const blockchain = getBlockchain();
        res.json({ blockchain });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get blockchain' });
    }
});

app.get('/api/latest-block', (req, res) => {
    try {
        const block = getLatestBlock();
        res.json({ block });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get latest block' });
    }
});

app.post('/api/add-block', (req, res) => {
    try {
        const { data } = req.body;
        
        if (!data || typeof data !== 'string') {
            return res.status(400).json({ error: 'Block data is required and must be a string' });
        }

        const newBlock = generateNewBlock(data);
        res.json({ 
            success: true, 
            block: newBlock,
            message: 'Block added successfully' 
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add block' });
    }
});

app.get('/api/validate-chain', (req, res) => {
    try {
        const blockchain = getBlockchain();
        const isValid = isChainValid(blockchain);
        res.json({ isValid });
    } catch (error) {
        res.status(500).json({ error: 'Failed to validate chain' });
    }
});

app.post('/api/run-tests', (req, res) => {
    try {
        // Run comprehensive tests
        const results = [];
        
        // Test 1: Genesis Block
        const genesis = genesisBlock();
        results.push(`Genesis Block: Index ${genesis.index}, Hash: ${genesis.hash}`);
        
        // Test 2: Add multiple blocks
        generateNewBlock("Test Block 1");
        generateNewBlock("Test Block 2");
        generateNewBlock("Test Block 3");
        
        // Test 3: Validate chain
        const blockchain = getBlockchain();
        const isValid = isChainValid(blockchain);
        
        results.push(`Chain Validation: ${isValid ? 'PASSED' : 'FAILED'}`);
        results.push(`Total Blocks: ${blockchain.length}`);
        
        res.json({ 
            success: true, 
            message: results.join('<br>'),
            blockchainLength: blockchain.length,
            isValid 
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to run tests' });
    }
});

app.get('/api/test-genesis', (req, res) => {
    try {
        const genesis = genesisBlock();
        const message = `Genesis Block created successfully!<br>
                        Index: ${genesis.index}<br>
                        Data: ${genesis.data}<br>
                        Hash: ${genesis.hash}<br>
                        Previous Hash: ${genesis.previousHash || 'None'}<br>
                        Timestamp: ${genesis.timestamp}`;
        
        res.json({ success: true, message });
    } catch (error) {
        res.status(500).json({ error: 'Failed to test genesis block' });
    }
});

app.get('/api/test-validation', (req, res) => {
    try {
        const blockchain = getBlockchain();
        const isValid = isChainValid(blockchain);
        
        let message = `Chain Validation Test:<br>`;
        message += `Total Blocks: ${blockchain.length}<br>`;
        message += `Chain Valid: ${isValid ? 'YES' : 'NO'}<br>`;
        
        if (blockchain.length > 1) {
            const latestBlock = blockchain[blockchain.length - 1];
            const previousBlock = blockchain[blockchain.length - 2];
            const blockValid = isBlockValid(latestBlock, previousBlock);
            message += `Latest Block Valid: ${blockValid ? 'YES' : 'NO'}`;
        }
        
        res.json({ success: true, message });
    } catch (error) {
        res.status(500).json({ error: 'Failed to test validation' });
    }
});

app.post('/api/clear-blockchain', (req, res) => {
    try {
        // Reset blockchain to only genesis block
        const genesis = genesisBlock();
        res.json({ 
            success: true, 
            message: 'Blockchain cleared (reset to genesis block)',
            genesisBlock: genesis
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to clear blockchain' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Blockchain API is running' });
});

export default app; 