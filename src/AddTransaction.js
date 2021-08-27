import React, {useState, useEffect} from 'react'

export default function AddTransaction() {


  const initialState = JSON.parse(window.localStorage.getItem("transactions"));  
  const [transactions, setTransactions] = useState(initialState);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  function getDT(){
    var today = new Date();
    var month = "";

    if(today.getMonth() <10){
      month = "0"+(1+today.getMonth());
    }else{
      month = (1+today.getMonth());
    }

    var date = today.getDate() + "/" + month + "/" + today.getFullYear();
    var getHrs = "";
    var getMnts = "";

    if(today.getHours() <10){
      getHrs = "0"+today.getHours();
    }else{
      getHrs = today.getHours();
    }

    if(today.getMinutes() <10){
      getMnts = "0"+today.getMinutes();
    }else{
      getMnts = today.getMinutes();
    }
    
    var time = getHrs + ":" + getMnts;

    return date + "-" + time;
      
  }
  
    const addTransaction = () => {
  
      const newTransaction = [...transactions,
      {
        id: Math.floor(Math.random() * 100000000),
        text,
        dateTime:getDT(),
        amount: +amount
      }];

        setTransactions(newTransaction);
    };

    useEffect(() => {
        return window.localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);
    


    return (
            <div>
              <form  onSubmit={addTransaction} >
                  <div className="form-control">
                      <label htmlFor="text">Text</label>
                      <input type="text" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Enter text..." 
                    />
                  </div>

                  <div className="form-control">
                      <label htmlFor="amount">Amount <br /></label>
                      <input type="number" 
                          value={amount} 
                          onChange={(e) => setAmount(e.target.value)} 
                          placeholder="Enter amount..." 
                      />
                  </div>


                  <button className="btn">Add transaction</button>
            </form>
            </div>
    )
}
