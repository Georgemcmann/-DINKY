
import Navbar from '@/components/Navbar';
import Ticker from '@/components/Ticker';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Story from '@/components/Story';
import Gallery from '@/components/Gallery';
import Community from '@/components/Community';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
 
export default function Home() {
  return (
    <>
      <Navbar />
      <Ticker />
      <Hero />
      <Reveal>
        <Stats />
      </Reveal>
      <Reveal>
        <Story />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <Community />
      </Reveal>
      <Footer />
    </>
  );
}
 
