import TransactionList from "@/components/TransactionList";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

const Transactions = async () => {
    
const query = groq`
*[_type == 'transactions']
`    

const transactions = await client.fetch(query)

return(
        <div>
            <TransactionList transactions={transactions} /> 
       </div>
    )
}

export default Transactions;