import { previewData } from "next/headers";
import { groq } from "next-sanity";

const query = groq`
  *[_type=='social']
`

const HomePage = () => {
  if(previewData()) {
    return <div>Preview Mode</div>
  }

  return(
  <div>
      <h1>Not in Preview Mode</h1>
  </div>
  ) 
}


export default HomePage;