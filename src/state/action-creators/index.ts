import { ActionType } from '../reducers/Action';
import { Dispatch } from 'redux';
import { IAction } from '../reducers/Actions';

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };
};

export const bankruptMoney = () => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};
