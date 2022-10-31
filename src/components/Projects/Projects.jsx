import Cards from "../Cards/Cards"
import { HiArrowUpRight } from "react-icons/hi2";

export default function Projects() {
  return (
    <>
      <section id="projects" className='max-w-full min-h-screen bg-black'>
        <div className="flex flex-col justify-center items-center px-20 pt-10 pb-20 space-y-10">
          <h1 className="text-[50px] py-10 font-Quicksand font-bold">Projects</h1>
          <div className="w-full grid grid-cols-1 px-20 space-y-24">
            <Cards title="Landing page" />
            <Cards title="Project page" />
          </div>
        </div>
        <div className="flex justify-end items-center p-3 gap-x-2">
          <h1>More on my Github</h1>
          <a href='https://github.com/Abhijeet03s' target="_blank">
            <HiArrowUpRight color="white" size={15} />
          </a>
        </div>
      </section>
    </>
  )
}




