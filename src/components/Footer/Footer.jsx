export default function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font bg-[#111111] font-Inter p-5">
        <div className="container mx-auto flex flex-col items-center sm:flex-row">
          <div>
            <div className="flex justify-center lg:justify-start">
              <img className="w-36" src="/assets/name-logo.svg" alt="logo" />
              <img className='hidden lg:block mt-5' src="/assets/Line 2.svg" alt="design-line" />
            </div>
            <h1 className='font-Pridi text-[#fff] mt-4'>Designed & Built by Abhijeet Sharma</h1>
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href='https://github.com/Abhijeet03s' target="_blank" className="text-gray-500">
              <img width={24} src="/socials-icon/github.png" alt="" />
            </a>
            <a href='https://www.linkedin.com/in/abhijeet-sharma03/' target="_blank" className="ml-3 text-gray-500">
              <img width={24} src="/socials-icon/linkedin.png" alt="" />
            </a>
            <a href='https://twitter.com/abhijeet_s04' target="_blank" className="ml-3 text-gray-500">
              <img width={24} src="/socials-icon/twitter.png" alt="" />
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}

