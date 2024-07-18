import React , {useState , useEffect} from 'react'

import {Loader , Card, FormField} from "../components";

const RenderCards = ({data , title}) =>{
  if(data?.length > 0 ){  
    return data.map((post) => <Card key={post.id} {...post}/>)  
  }

  else{
    return <h1 className='mt-5 font-bold text-[#6969ff] text-xl uppercase'>{title}</h1>
  }
}

const Home = () => {
  const [loading, setloading] = useState(false);
  const [allPosts, setallPosts] = useState(null);
  const [searchText, setsearchText] = useState('');

  return (
    <section className='max-w-7x1 mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#EEEEEE] text-[32px]'>The GenAI Generation</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>Try out this GenAI application for generating images</p>
      </div>

      <div className='mt-16'>
        <FormField/>
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader/>
          </div>
        ): (
          <>
            {searchText && (
              <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                Showing results for <span className='text-[#50727B]'>{searchText}</span>
              </h2>
            )}
          </>
        )}
      </div>
       <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
        {searchText ? (
          <RenderCards
            data= {[]}
            title="No Search Results Found !"
          />
        ):(
          <RenderCards 
            data= {[]}
            title="No Posts Found"
          />
        )}
       </div>
    </section>
  )
}

export default Home