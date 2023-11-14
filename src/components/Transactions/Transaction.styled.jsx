import styled from 'styled-components';


export const TransactionTable = styled.table`
    width: 340px;
   
    padding-top: 0px;
    padding-bottom: 20px;
    text-align:center;
 
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
    margin-bottom: 20px;
   
  
    border-radius: 8px;
    color:#483D8B;
    // background-color: #E6E6FA;
  
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);

    td,
    th {
      border: none;
    }

    td {
        padding: 5px 10px;
      }

      tbody tr {
        &:nth-of-type(2n) {
          background-color: #efefef;
        }
       
      
      thead > tr {
        background-color: #483D8B;
      }
      caption {
        font-size: 0.9em;
        padding: 5px;
        font-weight: bold;
      }
        
  `

export const Head = styled.thead`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 20px;

  padding-top: 0px;
  padding-bottom: 20px;

   border-radius: 8px;
   color:#E6E6FA;
   background-color: #483D8B;


  `
