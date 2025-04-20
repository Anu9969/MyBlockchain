import * as CryptoJS from 'crypto-js';

export class Block{
    public index:number;
    public data: string;
    public hash: string;
    public previousHash: string;
    public timestamp: number;

    constructor(index:number,data:string, hash: string, previousHash:string, timestamp:number){
        this.index = index;
        this.data = data;
        this.hash = hash;
        this.previousHash = previousHash;
        this.timestamp = timestamp;

    }

}


const calculateHash = (index:number, previousHash: string, timestamp:number, data:string):string =>{
    return CryptoJS.SHA256(index + previousHash +timestamp +data).toString();
}

export const genesisBlock = () => {
    return new Block(0, "Genesis Block", "0", "", 0);

}

let blockchain: Block[] = [genesisBlock()];

// export const getBlockchain = () => {
//     return blockchain;
// }

export const getBlockchain = ():Block[] => blockchain;

export const getLatestBlock = ():Block => blockchain[blockchain.length - 1];

export const generateNewBlock = (data:string): Block =>{
    const previousHash = getLatestBlock().hash;
    const nextIndex = getLatestBlock().index + 1;
    const timestamp = Math.round(new Date().getTime() / 1000);
    const hash = calculateHash(nextIndex,previousHash,timestamp,data);
    const newBlock = new Block(nextIndex,data,hash,previousHash,timestamp);
    blockchain.push(newBlock); //aise nhi krna ,pehle validate then the block should be added to the chain
    return newBlock;
}

export const isBlockValid = (newBlock:Block , previousBlock:Block):boolean =>{
    if (previousBlock.index + 1 !== newBlock.index){
        console.log("Invalid index");
        return false;
    }
    if (previousBlock.hash !== newBlock.previousHash){
        console.log("Invalid previous hash");
        return false;
    }
    if( newBlock.hash !== calculateHash(newBlock.index, newBlock.previousHash, newBlock.timestamp, newBlock.data)){
        console.log("Invalid hash");
        return false;
    }
    return true;
}