"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastBlockNumber = exports.getUSDTBalance = void 0;
const web3_1 = __importDefault(require("web3"));
const web3 = new web3_1.default('');
function getUSDTBalance(address, contractABI) {
    return __awaiter(this, void 0, void 0, function* () {
        const contractAddress = 'https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7'; // USDT contract address
        const usdtContract = new web3.eth.Contract(contractABI, contractAddress);
        const balance = yield usdtContract.methods.balanceOf(address).call();
        console.log('USDT balance:', balance);
        return balance;
    });
}
exports.getUSDTBalance = getUSDTBalance;
function getLastBlockNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        const blockNumber = yield web3.eth.getBlockNumber();
        return blockNumber;
    });
}
exports.getLastBlockNumber = getLastBlockNumber;
const usdtContractABI = []; // Define the USDT contract ABI
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const usdtBalance = yield getUSDTBalance('', usdtContractABI);
        console.log('USDT Balance:', usdtBalance);
        const lastBlockNumber = yield getLastBlockNumber();
        console.log('Last Block Number:', lastBlockNumber);
    });
}
main();
