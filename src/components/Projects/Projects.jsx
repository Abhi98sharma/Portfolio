import Cards from "../Cards/Cards"

export default function Projects() {
  return (
    <>
      <section className='max-w-full min-h-screen bg-black'>
        <div className="flex flex-col justify-center items-center px-20 pt-10 pb-20 space-y-10">
          <h1 className="text-[50px] font-Quicksand font-bold">Projects</h1>
          {/* <div className="flex justify-center items-center space-x-36 text-[15px] font-medium">
            <button className="p-4 bg-[#3A36F3] rounded-lg">HTML Projects</button>
            <button className="p-4 bg-[#3A36F3] rounded-lg">JS Projects</button>
            <button className="p-4 bg-[#3A36F3] rounded-lg">React Projects</button>
          </div> */}
          <div className="w-full grid grid-cols-3 gap-36 pt-10 px-10">
            <Cards /> 
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </section>
    </>
  )
}




