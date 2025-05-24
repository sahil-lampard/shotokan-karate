import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Trainers from './components/Trainers';
import Gallery from './components/Gallery';
import Membership from './components/Membership';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Courses />
      <Trainers />
      <Gallery />
      <Membership />
      <Contact />
    </main>
  );
}
