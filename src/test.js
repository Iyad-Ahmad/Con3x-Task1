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
Object.defineProperty(exports, "__esModule", { value: true });
const task1_1 = require("./task1");
describe('Ethereum functions', () => {
    test('getLastBlockNumber should return a valid block number', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock the web3 instance and simulate the result
        const mockWeb3 = {
            eth: {
                getBlockNumber: jest.fn().mockResolvedValueOnce(1000000),
            },
        };
        // Call the function
        const blockNumber = yield (0, task1_1.getLastBlockNumber)();
        // Check the result
        expect(blockNumber).toBe(1000000);
        expect(mockWeb3.eth.getBlockNumber).toHaveBeenCalledTimes(1);
    }));
    test('getUSDTBalance should return a valid balance', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock the web3 and usdtContract instances and simulate the result
        const mockWeb3 = {
            eth: {
                Contract: jest.fn().mockReturnValueOnce({
                    methods: {
                        balanceOf: jest.fn().mockResolvedValueOnce('1000000000000000000'), // 1 USDT
                    },
                }),
            },
        };
        // Call the function
        const balance = yield (0, task1_1.getUSDTBalance)('0xTEST_ADDRESS', mockWeb3 ?  : );
        // Check the result
        expect(balance).toBe('1000000000000000000');
        expect(mockWeb3.eth.Contract).toHaveBeenCalledWith(expect.any(Array), '0xdac17f958d2ee523a2206206994597c13d831ec7');
        expect(mockWeb3.eth.Contract().methods.balanceOf).toHaveBeenCalledWith('0xTEST_ADDRESS');
    }));
});
