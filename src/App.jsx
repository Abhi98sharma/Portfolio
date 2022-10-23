import './App.css'

export default function App() {

  return (
    <>
      <div className='max-w-full min-h-screen bg-black text-white font-Inter relative'>
        <div className="vector-image">
          <img className='absolute left-0 -top-24 z-0' src="/Vector.svg" alt="vector" />
        </div>
        <nav className="max-w-full h-[80px] bg-[#111111] flex items-center justify-between px-[120px]">
          <img className="w-[57px] h-[61px] z-20" src="/Logo.svg" alt="logo" />
          <ul className='flex justify-between items-center w-[600px]'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            <button><img className='w-12' src="/icon _sun outline_.png" alt="light-icon" /></button>
          </ul>
        </nav>
        <main className='bg-black flex justify-center items-center px-20 py-32 '>
          <div className='flex flex-col'>
            <div className="w-[820px] h-[315px] space-y-4">
              <div className='flex items-end'>
                <h1 className='text-[25px] font-semibold z-30'>Abhijeet Sharma</h1>
                <img className='mb-2 pl-2' src="/Line 1.svg" alt="design-line" />
              </div>
              <h1 className='text-[50px] font-bolder'>Aspiring Web Developer</h1>
              <p className='text-[25px] w-[740px] font-light'>I'm an aspiring web developer, fond of learning new technologies.
                Passionate about designing and creating products.
                Currently, learning MERN Stack Development.</p>
            </div>
            <div className='w-[245px]'>
              <button className='px-5 py-3 font-bold text-[18px] rounded-sm bg-[#3A36F3]'>Resume</button>
            </div>
          </div>
          <div className="image">
            <img className='max-w-96 max-h-96' src="/profilepic.svg" alt="profile-pic" />
          </div>
        </main>
      </div>
    </>
  )
}


