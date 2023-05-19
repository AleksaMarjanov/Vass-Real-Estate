

export default function Head() {

    const title = "Vass Real Estate Solutions - Real Estate, Property Managment";
    const description = 'Vass Real Estate is a full-service broker company based in Williston, North Dakota, that specializes in providing exceptional residential and commercial real estate services, property management, market analysis, and investment consulting. With a commitment to exceptional client service, local expertise, and innovative use of technology, Deano Vass Real Estate is a trusted expert in the local real estate industry. For more information about their services, please contact them at (701)572-1111'
    const keywords = ['Real estate', 'Broker', 'Property management', 'Market analysis', 'Investment consulting', 'Residential,Commercial', 'Williston', 'North Dakota', 'Client-centered', 'Local expertise', 'Innovative technology', 'Trusted expert', 'Exceptional service', 'Negotiation', 'Property value', 'Commission', 'Timeline', 'Listings', 'Buyers', 'Sellers', 'Property search', 'Comparative analysis', 'Offers', 'Closing process', 'Marketing', 'Promotion', 'Advocacy', 'Resources']


    return (
        <>
            <title>{title}</title>
            <meta name="og:type" content="website" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={description} />
            <meta name="og:title" content={title} />
            <meta name="keywords" content={`${keywords}`} />
            {/* <meta name="og:url" content={url} /> */}
            <meta name="og:description" content={description} />
            {/* <meta name="og:image" content={image} /> */}
            <link rel="icon" href="/favicon.ico" sizes="32x32" />
        </>
    )
}
