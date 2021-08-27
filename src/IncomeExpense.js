import React from 'react';


export default function IncomeExpense({transactionList}){
    const amounts = transactionList.map(transaction => transaction.amount);

    //income
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    //expense
    const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  	).toFixed(2);
    return(
        <>
	        <div className="inc-exp-container">
		        <div className="inc-exp">
		          <h3>Income</h3>
		          <p className="money plus">{income}</p>
		        </div>
		        <div className="inc-exp">
		          <h3>Expense</h3>
		          <p className="money minus">{expense}</p>
		        </div>
	      	</div>
        </>
    );
}