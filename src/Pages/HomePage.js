import { images } from '../constants';
import './HomePage.css'
import Footer from '../Components/Footer';


const HomePage = ({ message }) => {

    return (
        <div className='w-full'>
            <div className='main-blade-image mt-20'>
                <img className='vw-100 blage-img ls-is-cached lazyloaded' src={images.shoesPic} alt='' />
            </div>

            <h2 className='top-brands mt-10 mb-1'>Top Brands</h2>

            <section className='overflow-hidden text-gray-700'>
                <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.newBalance} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.hokaLogo} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.brooksLogo} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.salomonLogo} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.altraLogo} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.asicsLogo} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.adidasLogo} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.babolatLogo2} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.nikeLogo2} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className='main-blade-image mt-20'>
                <img className='w-100 blage-img ls-is-cached lazyloaded' src={images.newReleases} />
                <h2 className='mt-20 mb-4'>New Releases</h2>
                <section className='overflow-hidden text-gray-700'>
                    <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.newBalanceNR} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.hokaNewRelease} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.brooksNR} />
                                </div>
                            </div>
                            {/* <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.salomonNR} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.altraNR3} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.forspoken} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.lor} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.deathDoors} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.skullBones} />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage
