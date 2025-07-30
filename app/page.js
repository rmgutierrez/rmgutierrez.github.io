import { Footer, Navbar } from '../components';
import { About, Explore, Projects, Feedback, Hero} from '../sections';

const Page = () => (
  <div className='bg-gradient-to-br from-forest from-80% to-black to-20% overflow-hidden'>
    
    <Navbar />
    <Hero />
    <div className='relative'>
      <About />
      <Explore />
    </div>

    <div className='relative'>
    </div>


    <div className='relative'>
      <Feedback />
    </div>

    <Footer />
  </div>
);

export default Page;
