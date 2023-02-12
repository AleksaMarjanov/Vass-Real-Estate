import { previewData } from "next/headers";
import { groq } from "next-sanity";
import PreviewSuspense from '../../components/PreviewSuspense'
// import About from '../../components/About'
// import { PageInfo } from "@/typings";
// import fetchPageInfo from "@/utils/fetchPageInfo";


type Props = {
  query: string;
}

const HomePage = ({ query }: Props) => {
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
    Welcome to our Home Page
  </div>
  
  ) 
}

export default HomePage;

