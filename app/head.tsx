export default function Head() {

  const title ="Vass Real Estate Solutions - Real Estate, Property Managment";
  const description =
    "";
  const keyword = [ "Williston", "North Dakota"];

  return (
    <>
     <title>{title}</title>
    <meta name="og:type" content="website" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={description} />
    <meta name="og:title" content={title} />
    {/* <meta name="keywords" content={keyword} /> */}
    {/* <meta name="og:url" content={url} /> */}
    <meta name="og:description" content={description} />
    {/* <meta name="og:image" content={image} /> */}
    <link rel="icon" href="/favicon.png" sizes="32x32" />
    </>
  )
}
