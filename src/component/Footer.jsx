
import { FaCopyright, FaFacebookF, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-blue-950 mt-20'>
            <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-5 p-10 w-11/12 mx-auto'>
                <div>
                    <h2 className='text-white text-3xl font-bold'>DigiTools</h2>
                    <p className='text-white mt-3'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div>
                    <h3 className='text-white text-xl font-bold'>Product</h3>
                    <p className='text-white mt-2'>Features</p>
                    <p className='text-white mt-2'>Pricing</p>
                    <p className='text-white mt-2'>Templates</p>
                    <p className='text-white mt-2'>Integrations</p>
                </div>
                <div>
                    <h3 className='text-white text-xl font-bold'>Company</h3>
                    <p className='text-white mt-2'>About</p>
                    <p className='text-white mt-2'>Blog</p>
                    <p className='text-white mt-2'>Career</p>
                    <p className='text-white mt-2'>Press</p>
                </div>
                <div>
                    <h3 className='text-white text-xl font-bold'>Resources</h3>
                    <p className='text-white mt-2'>Documentation</p>
                    <p className='text-white mt-2'>Help Center</p>
                    <p className='text-white mt-2'>Community</p>
                    <p className='text-white mt-2'>Contact</p>
                </div>
                <div>
                    <h3 className='text-white text-xl font-bold mb-3'>Social Links</h3>
                    <div className='flex gap-4'>
                        <p className='text-white'><FaFacebookF></FaFacebookF></p>
                        <p className='text-white'><FaInstagramSquare></FaInstagramSquare></p>
                        <p className='text-white'><FaXTwitter></FaXTwitter></p>
                        
                    </div>
                </div>
                
            </div>
            <hr className='text-gray-500 mt-8' />

            <div className='grid md:grid-cols-2 place-content-center place-items-center gap-5 mt-10 p-10'>
                <p className='text-gray-500 flex items-center gap-1'><FaCopyright></FaCopyright>2026 Digitools. All rights reserved.</p>
                <div className='flex gap-4 text-gray-500'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;