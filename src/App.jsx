import './App.css'
function App() {


  return (
    <>
      <div className='max-w-full min-h-screen text-white'>
        <nav className='max-w-full h-[80px] font-Inter bg-[#111111]  flex items-center justify-between px-[120px]'>
          <img className="w-[57px] h-[61px]" src="/Logo.svg" alt="logo" />
          <ul className='flex justify-between items-center w-[600px]'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            <button><img className='w-12' src="/icon _sun outline_.png" alt="" /></button>
          </ul>
        </nav>
        <main className='bg-black flex justify-center items-center px-20 py-32'>
          <div className="w-[820px] h-[315px] space-y-5">
            <h1 className='text-[30px] font-semibold '>Abhijeet Sharma</h1>
            <h1 className='text-[70px] font-bolder'>Aspiring Web Developer</h1>
            <p className='text-[30px] font-light'>I'm an aspiring web developer, fond of learning new technologies.
              Passionate about designing and creating products.
              Currently, learning MERN Stack Development.</p>
            <div>
              <button className='w-64 h-20 font-bold text-[30px] bg-[#3A36F3]'>Resume</button>
            </div>
          </div>
          <div className="image">
            <img className='max-w-96 max-h-96' src="../public/images/pic-modified.png" alt="" />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
