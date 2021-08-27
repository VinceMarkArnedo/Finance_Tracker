import React from 'react'

export default function Balance({transactionList}) {
    const amounts = transactionList.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="Balance">
            <h3>Balance</h3>
            <p>{total}</p>
        </div>
    )
}
