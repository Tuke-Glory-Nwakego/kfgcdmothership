
import Link from "next/link";
import Image from "next/legacy/image";
import cuteblackbaby from "../public/cuteblackbaby.svg"
import Header from "@/components/Header";
import Aboutus from "@/components/Aboutus";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <section className="overflow-hidden">
      <div className="w-full h-[113px] fixed top-0 z-50 flex items-center justify-center">
        <Header />
      </div>
      <section>
      <div className="w-full  md:h-[600px]">
        <div className="relative">
          <Image
            src={cuteblackbaby}
            className=" w-full h-[600px] object-cover block bg-no-repeat bg-center transition-opacity duration-500"
            alt="cuteblackbaby"
          />
        </div>
        <div className="absolute top-[100px] md:top-[270px] md:w-[589px] z-50  md:ml-[8%]">
          <h1 className="text-zinc-100 text-center  font-bold md:text-[50px] mb-4">
            <Link href="/programs">OUR MANDATE</Link>
          </h1>
          <p className="md:text-xl font-normal text-center text-zinc-100">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est.
          </p>
        </div>

        <div className="inset-0 absolute md:h-[640px] bg-black opacity-50"></div>
      </div>
    </section>
      <Aboutus />
      <Team />
      <Partners />
      <Join />
      <Footer />
    </section>
  );
}
