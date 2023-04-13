import { bindActionCreators } from 'redux';
import styles from './HomePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreater, State } from '../../state';

const Home = () => {
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(
    actionCreater,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);

  return (
    <div className={styles.box}>
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>WithDraw</button>
      <button onClick={() => bankruptMoney()}>Bankrupt</button>
    </div>
  );
};

export default Home;
