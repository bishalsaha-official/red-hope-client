import { Typewriter } from 'react-simple-typewriter';
import logo from '../../../assets/home/banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${logo})` }} className='p-10 min-h-screen bg-center bg-no-repeat bg-cover flex items-center'>
            <div className='max-w-3xl mx-auto text-white text-center'>
                <h1 className='font-bold text-3xl md:text-5xl mb-5'>
                    <Typewriter
                        words={['Donate Blood, Save Lives', 'Every Drop Counts', 'Join the RedHope Community']}
                        loop={0}
                        cursor
                    ></Typewriter>
                </h1>
                <p className='md:text-xl'>RedHope is a community-driven platform dedicated to making blood donation faster, safer, and more accessible. Whether you're looking to donate or in urgent need, we're here to connect lives with compassion and hope.</p>
                <div className='mt-5'>
                    <Link to='/register'>
                        <button className='btn m-3 bg-[#EF3D32] text-white border-0 px-10 py-5'>Join as a Donor</button>
                    </Link>
                    <Link to="/search-donor">
                        <button className='btn bg-white text-[#EF3D32] border-0 px-10 py-5'>Search Donors</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;