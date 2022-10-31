
export default function Home() {
  return (
    <>
      <main id="home" className='min-h-screen bg-black flex justify-between items-center px-20 py-32 bg-image relative'>
        <div className='flex flex-col'>
          <div className="w-[820px] h-[315px] space-y-4">
            <div className='flex items-end'>
              <h1 className='text-[25px] text-[#fff] font-Kameron font-semibold'>Abhijeet Sharma</h1>
              <img className='mb-2 pl-2' src="/assets/Line 1.svg" alt="design-line" />
            </div>
            <h1 className='text-[59px] font-Quicksand name-heading'>Aspiring Web Developer</h1>
            <p className='text-[22px] w-[740px] font-light font-Pridi'>I'm an aspiring web developer, fond of learning new technologies.
              Passionate about designing and creating products.
              Currently, learning MERN Stack Development.</p>
            <div className='w-[245px] mt-10'>
              <a href="#">
                <button className='btn'>Resume</button>
              </a>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="/images/profile-pic.png" alt="profile-pic" />
        </div>
      </main>
    </>
  )
}

