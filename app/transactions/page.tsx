import TransactionList from "@/components/TransactionList";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

const Transactions = async () => {

    // Fetch data from Sanity 
    const query = groq`
*[_type=='transaction'] {
    ...,
    author->,
    categories[]->,
} | order(_createdAt desc)
`;

    const transactions = await client.fetch(query)

    return (
        <div>
            <TransactionList transactions={transactions} />
        </div>
    )
}

export default Transactions;
