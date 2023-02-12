import { previewData } from "next/headers";
import { groq } from "next-sanity";
import PreviewSuspense from '../../components/PreviewSuspense'

const query = groq`
  *[_type=='social']
`

const HomePage = () => {
  if(previewData()) {
    return (
      <PreviewSuspense fallback={(
        <div role="status">
          <p className="text-center text-lg animate-pulse text-white">
            Loading Preview Data...
          </p>
        </div>
      )}>

      </PreviewSuspense>
      )
  }

  return(
  <div>
      <h1>Not in Preview Mode</h1>
  </div>
  
  ) 
}


export default HomePage;