import Cards from "../Cards/Cards"

export default function Projects() {
  return (
    <>
      <section className='max-w-full min-h-screen bg-black'>
        <div className="flex flex-col justify-center items-center px-20 pt-10 pb-20 space-y-10">
          <h1 className="text-[50px] py-10 font-Quicksand font-bold">Projects</h1>
          <div className="w-full grid grid-cols-1 px-20 space-y-24">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </section>
    </>
  )
}




