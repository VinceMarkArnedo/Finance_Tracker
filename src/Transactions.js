import React, {useState, useEffect} from 'react';
import TransactionItem from './TransactionItem';

export default function Transactions({transactionList}) {


//   const initialState = JSON.parse(window.localStorage.getItem("transactions"));  
  const [transactions, setTransactions] = useState(transactionList);
    let dateTimes = transactions.map(t => {
        return t.dateTime;
    });
    // console.log(dateTimes);

    const getUniqueValues = array => [...new Set(array)];
    dateTimes = getUniqueValues(dateTimes);
    
    
    return (

        <>


            {dateTimes.map(dItem => {
            return (
                    <>
                        <h4>{dItem.slice(0,10)}</h4>
                        {transactions.map(tItem => {
                            if(tItem.dateTime === dItem){
                                return <>
                                        <table key={tItem.id} className="transaction-display">
                                            <tbody className={tItem.amount < 0 ? 'minus' : 'plus'}>
                                                <TransactionItem key={tItem.id}  {...tItem}/>
                                            </tbody>
                                        </table>
                            </>
                            }
                        })}
                    </>
                );
                
            })}


{/* {dateTimes.map(dItem => {
            return (
                    <>
                        <h1>{dItem}</h1>
                        {transactions.map(tItem => {
                            if(tItem.dateTime === dItem){
                                return <>
                                <li key={tItem.id}>
                                {tItem.text}
                                {tItem.amount}
                            </li>
                            </>
                            }
                        })}
                    </>
                );
                
            })} */}
        </>
        

            


    )
}
