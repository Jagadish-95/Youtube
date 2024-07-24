import  { useState , useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getVideo = async()=>{
        setIsLoading(true);
        try{
        const data = await fetch(url);
        const json = await data.json()
        
        setData(json?.items)
        }
        catch(err){

            setError(err)
        }
        finally{
            setIsLoading(false);
        }
      }
    
      useEffect(()=>{
          getVideo()
      }, [url])
    
  return {data, isLoading, error}
  
}

export default useFetch
