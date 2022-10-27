import Tilt from 'react-parallax-tilt';

export default function Cards() {
    return (
        <>
            <Tilt>
                <div className="h-[400px] bg-[#1E1E1E] text-white shadow shadow-white outline-none border-none rounded-md">
                    <img className='w-full object-cover rounded-md rounded-b-none ' src="/screenshot/paytm-clone-image.png" alt="" />
                    <div className='px-3 space-y-4'>
                        <h1 className='mt-4 text-2xl font-Quicksand'>Paytm-Clone</h1>
                        <p className='text-[15px] font-Inter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, perspiciatis!</p>
                        <div className='w-full flex space-x-4 font-Inter'>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JS</span>
                        </div>
                        <div className='flex space-x-3'>
                            <img className='bg-white' src="/assets/github.svg" alt="" />
                            <img className='bg-white' src="/assets/link.svg" alt="" />
                        </div>
                    </div>
                </div>
            </Tilt>
        </>
    )
}
