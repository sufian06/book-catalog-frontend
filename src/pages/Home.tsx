import hero from '@/assets/images/hero.jpg';
import { Button } from '@/components/ui/button';
import Footer from '@/layouts/Footer';
import { Link } from 'react-router-dom';
import banner from '../assets/images/banner.jpg';

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            Read <br /> book Properly
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Effortless communication at your world
          </p>
          <div className="text-primary mt-20">
            <p>This book is commonly read by all</p>
            <p>Any time, any where, any position</p>
          </div>
          <Button className="mt-5">Learn more</Button>
        </div>
        <div className="relative -right-14">
          <img className="w-3/5" src={banner} alt="" />
        </div>
      </div>
      <div className="mb-96">
        <div>
          <img className="mx-auto h-96 w-10/12" src={hero} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase mt-10">
            The future of book is here
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/products">Brows all products</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
