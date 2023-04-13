import { ActionType } from './Action';

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface BankuptAction {
  type: ActionType.BANKRUPT;
}

export type IAction = DepositAction | WithdrawAction | BankuptAction;
