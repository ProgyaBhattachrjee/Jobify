import { Button } from "@/components/ui/button";
import logo from "../assets/logo (1).svg"
import Image from "next/image";
import logo1 from "../assets/main (1).svg"
import Link from "next/link";
export default function Home() {
  return (
    <main>
    <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6 '>
      <Image src={logo} alt="logo"/>
    </header>
    <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
      <div>
        <h1 className='capitalize text-4xl md:text-7xl font-bold'>
          job <span className='text-primary'>tracking</span> app
        </h1>
        <p className='leading-loose max-w-md mt-4 '>
          I am baby wayfarers hoodie next level taiyaki brooklyn cliche blue
          bottle single-origin coffee chia. Aesthetic post-ironic venmo,
          quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
          narwhal.
        </p>
        <Button asChild className='mt-4'>
         <Link href='add-job'>Get started</Link>
        </Button>
      </div>
      <Image src={logo1} alt="landing image"/>
    </section>
  </main>
  );
}
