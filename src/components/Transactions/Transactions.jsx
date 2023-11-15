import {
  TransactionTable,
  Head
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
             {items.map(({id, type, amount, currency}) => (
             <tr
             key = {id}>
               <td>{type}</td>
               <td>{amount}</td>
               <td>{currency}</td>
             </tr>
         ))}
           </tbody>
         </TransactionTable>
          )
     };
 
