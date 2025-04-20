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