import {TransactionTable,
  Head,

} from './Transaction.styled';


export const TransactionHistory =({items =[]})=>{
    return (
        <TransactionTable className ="transaction-history">
          <Head>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </Head>
             <tbody>
             {items.map(item => (
             <tr
             key = {item.id}>
               <td>{item.type}</td>
               <td>{item.amount}</td>
               <td>{item.currency}</td>
             </tr>
         ))}
           </tbody>
         </TransactionTable>
          )
     };
 
