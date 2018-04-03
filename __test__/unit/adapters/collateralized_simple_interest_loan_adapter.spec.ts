// Given that we rely on having access to the deployed Dharma smart contracts,
// we unmock the Dharma smart contracts artifacts package to pull the most recently
// deployed contracts on the current network.
jest.unmock("@dharmaprotocol/contracts");

// Unmock the "fs-extra" package in order to give us
// access to the deployed TokenRegistry on the
// test chain.
jest.unmock("fs-extra");

// libraries
import * as Web3 from "web3";
import * as moment from "moment";

// utils
import { BigNumber } from "utils/bignumber";
import { ACCOUNTS } from "../../accounts";
import * as Units from "utils/units";
import { Web3Utils } from "utils/web3_utils";

// wrappers
import {
    DebtKernelContract,
    ERC20Contract,
    RepaymentRouterContract,
    CollateralizedSimpleInterestTermsContractContract,
} from "src/wrappers";

// types
import { DebtOrder, DebtRegistryEntry } from "src/types";

// adapters
import {
    CollateralizedSimpleInterestLoanAdapter,
    CollateralizedLoanTerms,
    CollateralizedAdapterErrors,
    CollateralizedTermsContractParameters,
    CollateralizedSimpleInterestLoanOrder,
} from "src/adapters/collateralized_simple_interest_loan_adapter";
import { SimpleInterestLoanAdapter } from "src/adapters/simple_interest_loan_adapter";

import { ContractsAPI, ContractsError } from "src/apis/contracts_api";

const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);
const web3Utils = new Web3Utils(web3);
const contracts = new ContractsAPI(web3);

const collateralizedSimpleInterestLoanAdapter = new CollateralizedSimpleInterestLoanAdapter(
    web3,
    contracts,
);
const collateralizedLoanTerms = new CollateralizedLoanTerms(web3, contracts);

const TX_DEFAULTS = { from: ACCOUNTS[0].address, gas: 4712388 };

const REP_TOKEN_SYMBOL = "REP";
const ZRX_TOKEN_SYMBOL = "ZRX";
const MKR_TOKEN_SYMBOL = "MKR";

interface Scenario {
    unpackedParams: CollateralizedTermsContractParameters;
    packedParams: string;
}

describe("Collateralized Terms Contract Interface (Unit Tests)", () => {
    let snapshotId: number;

    beforeEach(async () => {
        snapshotId = await web3Utils.saveTestSnapshot();
    });

    afterEach(async () => {
        await web3Utils.revertToSnapshot(snapshotId);
    });

    const scenario_1: Scenario = {
        unpackedParams: {
            collateralTokenIndex: new BigNumber(0),
            collateralAmount: new BigNumber(3.5 * 10 ** 18),
            gracePeriodInDays: new BigNumber(5),
        },
        packedParams: "0x000000000000000000000000000000000000000000000030927f74c9de000005",
    };

    const scenario_2: Scenario = {
        unpackedParams: {
            collateralTokenIndex: new BigNumber(1),
            collateralAmount: new BigNumber(723489020 * 10 ** 18),
            gracePeriodInDays: new BigNumber(30),
        },
        packedParams: "0x00000000000000000000000000000000000000125674c25cd7f81d067000001e",
    };

    const scenario_3: Scenario = {
        unpackedParams: {
            collateralTokenIndex: new BigNumber(8),
            collateralAmount: new BigNumber(1212234234 * 10 ** 18),
            gracePeriodInDays: new BigNumber(90),
        },
        packedParams: "0x0000000000000000000000000000000000000083eabc9580d20c1abba800005a",
    };

    describe("#packParameters", () => {
        describe("...with invalid collateral token index", () => {
            test("should throw INVALID_TOKEN_INDEX error", () => {
                const invalidCollateralTokenIndex = new BigNumber(300);

                expect(() => {
                    collateralizedLoanTerms.packParameters({
                        ...scenario_1.unpackedParams,
                        collateralTokenIndex: invalidCollateralTokenIndex,
                    });
                }).toThrow(
                    CollateralizedAdapterErrors.INVALID_TOKEN_INDEX(invalidCollateralTokenIndex),
                );
            });
        });
        describe("...with collateral amount > 2^92 - 1", () => {
            test("should throw COLLATERAL_AMOUNT_EXCEEDS_MAXIMUM error", () => {
                expect(() => {
                    collateralizedLoanTerms.packParameters({
                        ...scenario_1.unpackedParams,
                        collateralAmount: new BigNumber(3.5 * 10 ** 38),
                    });
                }).toThrow(CollateralizedAdapterErrors.COLLATERAL_AMOUNT_EXCEEDS_MAXIMUM());
            });
        });
        describe("...with collateral amount < 0", () => {
            test("should throw COLLATERAL_AMOUNT_IS_NEGATIVE error", () => {
                expect(() => {
                    collateralizedLoanTerms.packParameters({
                        ...scenario_1.unpackedParams,
                        collateralAmount: new BigNumber(-1),
                    });
                }).toThrow(CollateralizedAdapterErrors.COLLATERAL_AMOUNT_IS_NEGATIVE());
            });
        });
        describe("...with collateral amount containing decimals", () => {
            test("should throw INVALID_DECIMAL_VALUE error", () => {
                expect(() => {
                    collateralizedLoanTerms.packParameters({
                        ...scenario_1.unpackedParams,
                        collateralAmount: new BigNumber(100.4567),
                    });
                }).toThrowError(CollateralizedAdapterErrors.INVALID_DECIMAL_VALUE());
            });
        });
        describe("...with grace period in days < 0", () => {
            test("should throw GRACE_PERIOD_IS_NEGATIVE error", () => {
                expect(() => {
                    collateralizedLoanTerms.packParameters({
                        ...scenario_1.unpackedParams,
                        gracePeriodInDays: new BigNumber(-1),
                    });
                }).toThrowError(CollateralizedAdapterErrors.GRACE_PERIOD_IS_NEGATIVE());
            });
        });
        describe("...with grace period in days > 255", () => {
            test("should throw GRACE_PERIOD_EXCEEDS_MAXIMUM error", () => {
                expect(() => {
                    collateralizedLoanTerms.packParameters({
                        ...scenario_1.unpackedParams,
                        gracePeriodInDays: new BigNumber(256),
                    });
                }).toThrowError(CollateralizedAdapterErrors.GRACE_PERIOD_EXCEEDS_MAXIMUM());
            });
        });
        describe("...with grace period containing decimals", () => {
            test("should throw INVALID_DECIMAL_VALUE error", () => {
                expect(() => {
                    collateralizedLoanTerms.packParameters({
                        ...scenario_1.unpackedParams,
                        gracePeriodInDays: new BigNumber(1.567),
                    });
                }).toThrowError(CollateralizedAdapterErrors.INVALID_DECIMAL_VALUE());
            });
        });
        describe("...with valid collateral token index, collateral amount, and grace period in days", () => {
            describe("Scenario #1", () => {
                test("should return correctly packed parameters", () => {
                    expect(
                        collateralizedLoanTerms.packParameters(scenario_1.unpackedParams),
                    ).toEqual(scenario_1.packedParams);
                });
            });
            describe("Scenario #2", () => {
                test("should return correctly packed parameters", () => {
                    expect(
                        collateralizedLoanTerms.packParameters(scenario_2.unpackedParams),
                    ).toEqual(scenario_2.packedParams);
                });
            });
            describe("Scenario #3", () => {
                test("should return correctly packed parameters", () => {
                    expect(
                        collateralizedLoanTerms.packParameters(scenario_3.unpackedParams),
                    ).toEqual(scenario_3.packedParams);
                });
            });
        });
    });

    describe("#unpackParameters", () => {
        describe("...with value that has too few bytes", () => {
            const termsContractParameters = "0x" + "f".repeat(63);

            test("should throw INVALID_PACKED_PARAMETERS error", () => {
                expect(() => {
                    collateralizedLoanTerms.unpackParameters(termsContractParameters);
                }).toThrowError(/Expected packedParams to conform to schema \/Bytes32/);
            });
        });
        describe("...with value that has too many bytes", () => {
            const termsContractParameters = "0x" + "f".repeat(65);

            test("should throw INVALID_PACKED_PARAMETERS error", () => {
                expect(() => {
                    collateralizedLoanTerms.unpackParameters(termsContractParameters);
                }).toThrowError(/Expected packedParams to conform to schema \/Bytes32/);
            });
        });
        describe("...with value that includes non-hexadecimal characters", () => {
            const termsContractParameters = "0x" + "z".repeat(64);

            test("should throw INVALID_PACKED_PARAMETERS error", () => {
                expect(() => {
                    collateralizedLoanTerms.unpackParameters(termsContractParameters);
                }).toThrowError(/Expected packedParams to conform to schema \/Bytes32/);
            });
        });
    });
    describe("...with valid termsContractParameters string", () => {
        describe("Scenario #1", () => {
            test("should return correctly unpacked parameters", () => {
                expect(collateralizedLoanTerms.unpackParameters(scenario_1.packedParams)).toEqual(
                    scenario_1.unpackedParams,
                );
            });
        });
        describe("Scenario #2", () => {
            test("should return correctly unpacked parameters", () => {
                expect(collateralizedLoanTerms.unpackParameters(scenario_2.packedParams)).toEqual(
                    scenario_2.unpackedParams,
                );
            });
        });
        describe("Scenario #3", () => {
            test("should return correctly unpacked parameters", () => {
                expect(collateralizedLoanTerms.unpackParameters(scenario_3.packedParams)).toEqual(
                    scenario_3.unpackedParams,
                );
            });
        });
    });
});

describe("Collateralized Simple Interest Loan Adapter (Unit Tests)", () => {
    interface AdapterScenario {
        debtOrder: DebtOrder.Instance;
        fullLoanOrder: CollateralizedSimpleInterestLoanOrder;
        minimalLoanOrder: CollateralizedSimpleInterestLoanOrder;
        entry: DebtRegistryEntry;
    }

    let scenario_1: AdapterScenario;
    let scenario_2: AdapterScenario;
    let scenario_3: AdapterScenario;

    beforeAll(async () => {
        const debtKernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
        const repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        const termsContract = await contracts.loadCollateralizedSimpleInterestTermsContract(
            TX_DEFAULTS,
        );

        const REP_TOKEN = await contracts.loadTokenBySymbolAsync(REP_TOKEN_SYMBOL, TX_DEFAULTS);

        const MKR_TOKEN = await contracts.loadTokenBySymbolAsync(MKR_TOKEN_SYMBOL, TX_DEFAULTS);

        const ZRX_TOKEN = await contracts.loadTokenBySymbolAsync(ZRX_TOKEN_SYMBOL, TX_DEFAULTS);

        const principalAmountForScenario1 = new BigNumber(1000 * 10 ** 18);
        const principalAmountForScenario2 = new BigNumber(12 * 10 ** 18);
        const principalAmountForScenario3 = new BigNumber(50 * 10 ** 18);

        const debtOrderBase = {
            ...DebtOrder.DEFAULTS,
            kernelVersion: debtKernel.address,
            issuanceVersion: repaymentRouter.address,
            termsContract: termsContract.address,
        };

        const debtOrderForScenario1 = {
            ...debtOrderBase,
            principalAmount: principalAmountForScenario1,
            principalToken: REP_TOKEN.address,
            termsContractParameters:
                "0x000000003635c9adc5dea000000003e8300020200000008ac7230489e800005a",
        };

        const debtOrderForScenario2 = {
            ...debtOrderBase,
            principalAmount: principalAmountForScenario2,
            principalToken: MKR_TOKEN.address,
            termsContractParameters:
                "0x0100000000a688906bd8b000000004b0400030000000004563918244f4000078",
        };

        const debtOrderForScenario3 = {
            ...debtOrderBase,
            principalAmount: principalAmountForScenario3,
            principalToken: ZRX_TOKEN.address,
            termsContractParameters:
                "0x0200000002b5e3af16b18800000007d02000a010000001bc16d674ec8000000a",
        };

        const loanOrderParamsForScenario1 = {
            principalTokenSymbol: REP_TOKEN_SYMBOL,
            principalAmount: principalAmountForScenario1,
            interestRate: new BigNumber(0.1),
            amortizationUnit: SimpleInterestLoanAdapter.Installments.MONTHLY,
            termLength: new BigNumber(2),
            collateralTokenSymbol: ZRX_TOKEN_SYMBOL,
            collateralAmount: new BigNumber(10 * 10 ** 18),
            gracePeriodInDays: new BigNumber(90),
        };

        const loanOrderParamsForScenario2 = {
            principalTokenSymbol: MKR_TOKEN_SYMBOL,
            principalAmount: principalAmountForScenario2,
            interestRate: new BigNumber(0.12),
            amortizationUnit: SimpleInterestLoanAdapter.Installments.YEARLY,
            termLength: new BigNumber(3),
            collateralTokenSymbol: REP_TOKEN_SYMBOL,
            collateralAmount: new BigNumber(5 * 10 ** 18),
            gracePeriodInDays: new BigNumber(120),
        };

        const loanOrderParamsForScenario3 = {
            principalTokenSymbol: ZRX_TOKEN_SYMBOL,
            principalAmount: principalAmountForScenario3,
            interestRate: new BigNumber(0.2),
            amortizationUnit: SimpleInterestLoanAdapter.Installments.WEEKLY,
            termLength: new BigNumber(10),
            collateralTokenSymbol: MKR_TOKEN_SYMBOL,
            collateralAmount: new BigNumber(32 * 10 ** 18),
            gracePeriodInDays: new BigNumber(10),
        };

        const debtRegistryEntryBase = {
            version: repaymentRouter.address,
            beneficiary: ACCOUNTS[0].address,
            underwriter: ACCOUNTS[1].address,
            underwriterRiskRating: Units.percent(0.1),
            termsContract: termsContract.address,
            issuanceBlockTimestamp: new BigNumber(moment().unix()),
        };

        scenario_1 = {
            debtOrder: debtOrderForScenario1,
            fullLoanOrder: {
                ...debtOrderForScenario1,
                ...loanOrderParamsForScenario1,
            },
            minimalLoanOrder: loanOrderParamsForScenario1,
            entry: {
                ...debtRegistryEntryBase,
                termsContractParameters: debtOrderForScenario1.termsContractParameters,
            },
        };
        scenario_2 = {
            debtOrder: debtOrderForScenario2,
            fullLoanOrder: {
                ...debtOrderForScenario2,
                ...loanOrderParamsForScenario2,
            },
            minimalLoanOrder: loanOrderParamsForScenario2,
            entry: {
                ...debtRegistryEntryBase,
                termsContractParameters: debtOrderForScenario2.termsContractParameters,
            },
        };
        scenario_3 = {
            debtOrder: debtOrderForScenario3,
            fullLoanOrder: {
                ...debtOrderForScenario3,
                ...loanOrderParamsForScenario3,
            },
            minimalLoanOrder: loanOrderParamsForScenario3,
            entry: {
                ...debtRegistryEntryBase,
                termsContractParameters: debtOrderForScenario3.termsContractParameters,
            },
        };
    });

    describe("#toDebtOrder", () => {
        describe("collateralized simple interest loan's required parameter is missing or malformed", () => {
            describe("`collateralTokenSymbol` is missing", () => {
                test("should throw DOES_NOT_CONFORM_TO_SCHEMA", async () => {
                    await expect(
                        collateralizedSimpleInterestLoanAdapter.toDebtOrder({
                            ...scenario_1.minimalLoanOrder,
                            collateralTokenSymbol: undefined,
                        }),
                    ).rejects.toThrow('instance requires property "collateralTokenSymbol"');
                });
            });
            describe("`collateralTokenSymbol` is not tracked by Token Registry", () => {
                test("should throw CANNOT_FIND_TOKEN_WITH_SYMBOL", async () => {
                    await expect(
                        collateralizedSimpleInterestLoanAdapter.toDebtOrder({
                            ...scenario_1.minimalLoanOrder,
                            collateralTokenSymbol: "EOS", // EOS is not tracked in our test env's registry
                        }),
                    ).rejects.toThrow(ContractsError.CANNOT_FIND_TOKEN_WITH_SYMBOL("EOS"));
                });
            });
            describe("`collateralAmount` is missing", async () => {
                test("should throw DOES_NOT_CONFORM_TO_SCHEMA", async () => {
                    await expect(
                        collateralizedSimpleInterestLoanAdapter.toDebtOrder({
                            ...scenario_1.minimalLoanOrder,
                            collateralAmount: undefined,
                        }),
                    ).rejects.toThrow('instance requires property "collateralAmount"');
                });
            });
            describe("`gracePeriodInDays` is missing", async () => {
                test("should throw DOES_NOT_CONFORM_TO_SCHEMA", async () => {
                    await expect(
                        collateralizedSimpleInterestLoanAdapter.toDebtOrder({
                            ...scenario_1.minimalLoanOrder,
                            gracePeriodInDays: undefined,
                        }),
                    ).rejects.toThrow('instance requires property "gracePeriodInDays"');
                });
            });
        });

        describe("collateralized simple interest loan's required parameters are present and well-formed ", () => {
            describe("Scenario #1", () => {
                test("should return debt order with correctly packed values", async () => {
                    await expect(
                        collateralizedSimpleInterestLoanAdapter.toDebtOrder(
                            scenario_1.fullLoanOrder,
                        ),
                    ).resolves.toEqual(scenario_1.debtOrder);
                });
            });
            describe("Scenario #2", () => {
                test("should return debt order with correctly packed values", async () => {
                    await expect(
                        collateralizedSimpleInterestLoanAdapter.toDebtOrder(
                            scenario_2.fullLoanOrder,
                        ),
                    ).resolves.toEqual(scenario_2.debtOrder);
                });
            });
            describe("Scenario #3", () => {
                test("should return debt order with correctly packed values", async () => {
                    await expect(
                        collateralizedSimpleInterestLoanAdapter.toDebtOrder(
                            scenario_3.fullLoanOrder,
                        ),
                    ).resolves.toEqual(scenario_3.debtOrder);
                });
            });
        });
    });

    describe("#fromDebtOrder()", () => {
        describe("argument does not conform to the DebtOrderWithTermsSpecified schema", () => {
            describe("malformed terms contract", () => {
                test("should throw DOES_NOT_CONFORM_TO_SCHEMA", async () => {
                    await expect(
                        collateralizedSimpleInterestLoanAdapter.fromDebtOrder({
                            ...scenario_1.debtOrder,
                            termsContract: "invalid terms contract",
                        }),
                    ).rejects.toThrow("instance.termsContract does not match pattern");
                });
            });

            describe("missing termsContract", () => {
                test("should throw DOES_NOT_CONFORM_TO_SCHEMA", async () => {
                    await expect(
                        collateralizedSimpleInterestLoanAdapter.fromDebtOrder({
                            ...scenario_1.debtOrder,
                            termsContract: undefined,
                        }),
                    ).rejects.toThrow('instance requires property "termsContract"');
                });
            });

            describe("missing termsContractParameters", () => {
                test("should throw DOES_NOT_CONFORM_TO_SCHEMA", async () => {
                    await expect(
                        collateralizedSimpleInterestLoanAdapter.fromDebtOrder({
                            ...scenario_1.debtOrder,
                            termsContractParameters: undefined,
                        }),
                    ).rejects.toThrow('instance requires property "termsContractParameters"');
                });
            });

            describe("missing principalAmount", async () => {
                test("should throw DOES_NOT_CONFORM_TO_SCHEMA", async () => {
                    await expect(
                        collateralizedSimpleInterestLoanAdapter.fromDebtOrder({
                            ...scenario_1.debtOrder,
                            principalAmount: undefined,
                        }),
                    ).rejects.toThrow('instance requires property "principalAmount"');
                });
            });

            describe("missing principalToken", async () => {
                test("should throw DOES_NOT_CONFORM_TO_SCHEMA", async () => {
                    await expect(
                        collateralizedSimpleInterestLoanAdapter.fromDebtOrder({
                            ...scenario_1.debtOrder,
                            principalToken: undefined,
                        }),
                    ).rejects.toThrow('instance requires property "principalToken"');
                });
            });
        });

        describe("debt order is valid and well-formed", () => {
            describe("Scenario #1", () => {
                test("should return `CollateralizedSimpleInterestLoanOrder` with correctly unpacked values", async () => {
                    await expect(
                        collateralizedSimpleInterestLoanAdapter.fromDebtOrder(scenario_1.debtOrder),
                    ).resolves.toEqual(scenario_1.fullLoanOrder);
                });
            });
            describe("Scenario #2", () => {
                test("should return `CollateralizedSimpleInterestLoanOrder` with correctly unpacked values", async () => {
                    await expect(
                        collateralizedSimpleInterestLoanAdapter.fromDebtOrder(scenario_2.debtOrder),
                    ).resolves.toEqual(scenario_2.fullLoanOrder);
                });
            });
            describe("Scenario #3", () => {
                test("should return `CollateralizedSimpleInterestLoanOrder` with correctly unpacked values", async () => {
                    await expect(
                        collateralizedSimpleInterestLoanAdapter.fromDebtOrder(scenario_3.debtOrder),
                    ).resolves.toEqual(scenario_3.fullLoanOrder);
                });
            });
        });
    });
});
