import React, {useState, useEffect} from 'react';
import './App.css';
import Transactions from './Transactions';
import TransactionItem from './TransactionItem';
import AddTransaction from './AddTransaction';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';


function App() {

	const transactionsListDum =  [
		      { id: 1, text: 'Ice Cream', dateTime: '21/01/2021-12:40',  amount: -20 },
              { id: 2, text: 'Milkshake', dateTime: '21/01/2021-12:40',  amount: -100 },
              { id: 3, text: 'Upwork', dateTime: '23/05/2021-4:30',  amount: 25000 },
              { id: 4, text: 'Ergonomic Chair', dateTime: '18/06/2021-1:30',  amount: -5000 },
              { id: 5, text: 'Stocks', dateTime: '23/08/2021-10:00',  amount: 300 }
	];

    if(window.localStorage.getItem("transactions") === "null"){
        console.log("KRIZEL");
    }
    const initialState = JSON.parse(window.localStorage.getItem("transactions")); 
    const [transactionList, setTransactionList] = useState(initialState || transactionsListDum);

  return (


        <div className="container">
            <div className="A">
                <IncomeExpense transactionList={transactionList}/>
                <Balance transactionList={transactionList}/>
                <AddTransaction />
            </div>
            
            <div class="vl"></div>
            
            <div className="B">
            <h4>Transactions: </h4>
                <div className="Display">
                    <Transactions  key={99} transactionList={transactionList} />
                </div>
            
            </div>
        </div>


      

  );
}

export default App;
