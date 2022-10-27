
export default function Home() {
  return (
    <>
      <main className='bg-black flex justify-center items-center px-20 py-32 '>
        <div className='flex flex-col'>
          <div className="w-[820px] h-[315px] space-y-4">
            <div className='flex items-end'>
              <h1 className='text-[25px] font-Kameron font-semibold'>Abhijeet Sharma</h1>
              <img className='mb-2 pl-2' src="/assets/Line 1.svg" alt="design-line" />
            </div>
            <h1 className='text-[59px] font-Quicksand'>Aspiring Web Developer</h1>
            <p className='text-[25px] w-[740px] font-light font-Pridi'>I'm an aspiring web developer, fond of learning new technologies.
              Passionate about designing and creating products.
              Currently, learning MERN Stack Development.</p>
          </div>
          <div className='w-[245px]'>
            <a href="www.google.com">
              <button className='px-5 py-3 font-bold text-[18px] font-Kameron rounded-[5px] bg-[#3A36F3]'>Resume
              </button>
            </a>
          </div>
        </div>
        <div className="image">
          <img className='max-w-96 max-h-96' src="/images/profile-pic.png" alt="profile-pic" />
        </div>
      </main>
    </>
  )
}

