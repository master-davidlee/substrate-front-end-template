import metadata from './LolMetadata.json';
import {Abi, ContractPromise} from '@polkadot/api-contract';

export const defaultGasLimit = 300000n * 1000000n;
const LolContractAddress = '5CfXtJprYLQRLNED5N85pnJ129L32Hep8kwhNRhtGgzMZH3q';

export default function LolContract(api) {
    const abi = new Abi(metadata);
    return new ContractPromise(api, abi, LolContractAddress);
}

export function displayLol(balance) {
    return balance.toString() + ' LOL';
}
