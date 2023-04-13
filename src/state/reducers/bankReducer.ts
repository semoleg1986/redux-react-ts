import { ActionType } from './Action';
import { IAction } from './Actions';

const initialState = 0;

const bankReducer = (state: number = initialState, action: IAction) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default bankReducer;
