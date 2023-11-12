
export const TransactionHistory =({items =[]})=>{
    return (
        <table class="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
             <tbody>
             {items.map(item => (
             <tr
             key = {item.id}>
               <td>{item.type}</td>
               <td>{item.amount}</td>
               <td>{item.currency}</td>
             </tr>
         ))};
           </tbody>
         </table>
          );
     };
 
 
 {/* export const Statistics = ({title, stats}) =>{
return (   
    
     <section class="statistics">
<h2 className="title">{title}</h2>

<ul className="stat-list">
    {stats.map(stat=>( 
    <li 
    key={stat.id}
    className="item">
    <span className="label">{stat.label}</span>
    <span className="percentage">{stat.percentage}%</span>
  </li>
))}
 
</ul>
</section>)
};  */}