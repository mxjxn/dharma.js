import { ACCOUNTS } from "../../../accounts";
import { SimpleInterestLoanOrder } from "src/adapters/simple_interest_loan_adapter";
import { BigNumber } from "utils/bignumber";
import { ERC20TokenSymbol } from "utils/constants";

export namespace Orders {
    export const NONEXISTENT_TOKEN_ID = new BigNumber(13);
    export const MALFORMED_TOKEN_ID = new BigNumber(-5);

    export const CREDITOR = ACCOUNTS[0].address;
    export const DEBTOR = ACCOUNTS[1].address;

    export const TOKENS_APPROVED_OPERATOR = ACCOUNTS[2].address;
    export const OWNERS_APPROVED_OPERATOR = ACCOUNTS[3].address;
    export const UNAPPROVED_TRANSFER_SENDER = ACCOUNTS[4].address;
    export const CREDITOR_ONE = ACCOUNTS[5].address;
    export const CREDITOR_TWO = ACCOUNTS[6].address;
    export const APPROVEE = ACCOUNTS[7].address;
    export const TRANSFEREE = ACCOUNTS[8].address;

    export const WHO = {
        creditor: CREDITOR,
        debtor: DEBTOR,
    };

    export const ORDER_ONE: SimpleInterestLoanOrder = {
        principalAmount: new BigNumber(10 * 10 ** 18),
        principalTokenSymbol: ERC20TokenSymbol.ZRX,
        interestRate: new BigNumber(4.135),
        amortizationUnit: "months",
        termLength: new BigNumber(3),
        ...WHO,
    };

    export const ORDER_TWO: SimpleInterestLoanOrder = {
        principalAmount: new BigNumber(11 * 10 ** 18),
        principalTokenSymbol: ERC20TokenSymbol.MKR,
        interestRate: new BigNumber(8.937),
        amortizationUnit: "years",
        termLength: new BigNumber(2),
        ...WHO,
    };

    export const ORDER_THREE: SimpleInterestLoanOrder = {
        principalAmount: new BigNumber(12 * 10 ** 18),
        principalTokenSymbol: ERC20TokenSymbol.REP,
        interestRate: new BigNumber(1.987),
        amortizationUnit: "weeks",
        termLength: new BigNumber(10),
        ...WHO,
    };

    export const ALL_ORDERS = [ORDER_ONE, ORDER_TWO, ORDER_THREE];

    export const CREDITOR_ONE_ORDER: SimpleInterestLoanOrder = {
        ...ORDER_ONE,
        creditor: CREDITOR_ONE,
    };

    export const CREDITOR_TWO_ORDER: SimpleInterestLoanOrder = {
        ...ORDER_TWO,
        creditor: CREDITOR_TWO,
    };
}
