type Props ={
    params: {
        slug: string;
    }
}

const Listing = ({ params: { slug }}: Props) => {
    return(
        <div>
            Listing: {slug}
        </div>
    )
}

export default Listing;