import React from 'react'

export default function TransactionItem({id, text, dateTime, amount, updateAmount}) {


    // const sign = amount < 0 ? '-' : '+';
    // const timeOnly = 
    const timePoint = dateTime.slice(11,16) < "12:00" ? 'AM' : 'PM';
    return (

        <>
            <tr className={amount < 0 ? 'minus' : 'plus'}>
                  <td className="t_text">{text} </td>   
		          <td className="t_amount">${Math.abs(amount)}</td> 
		          <td className="t_date">{dateTime.slice(11,16) + " " +timePoint} </td>
		    </tr> 
        </>
    )
}
