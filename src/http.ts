import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { getBlockchain, generateNewBlock } from './blockchain';

export const httpServer = (port: number) => {
    const app = express();

    app.use(bodyParser.json());

    app.get('/blockchain', (req: Request, res: Response) => {
        try {
            const blockchain = getBlockchain();
            res.json(blockchain);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get blockchain' });
        }
    });

    app.post('/mineBlock', (req: Request, res: Response) => {
        try {
            const { data } = req.body;
            if (!data) {
                return res.status(400).json({ error: 'Data is required' });
            }
            const newBlock = generateNewBlock(data);
            res.status(201).json(newBlock);
        } catch (error) {
            res.status(500).json({ error: 'Failed to mine block' });
        }
    });

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
        console.log(`http://localhost:${port}/blockchain`);
    });
}