import Image from 'next/image';
import jumboImg from '@/assets/jumboimg.jpg';

export default function Home() {
  return (
    <div className="flex space-x-5 flex-col md:flex-row">
      <div className="flex-[1]">
        <Image
          placeholder="blur"
          priority
          className="rounded w-full md:w-auto"
          width={500}
          height={300}
          alt="side"
          src={jumboImg}
          blurDataURL={String(jumboImg)}></Image>
      </div>
      <div className="py-4 flex-[1]">
        <h2 className="uppercase font-semibold mb-4 tracking-widest text-xs">Melihat dengan mata</h2>
        <h2 className="scroll-m-20 text-xl text-primary-500 font-extrabold tracking-tight lg:text-3xl mb-4">
          Menggenggam dengan kasih
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maiores sapiente harum mollitia eligendi facere
          tenetur rem. A, odit molestias.
        </p>
      </div>
    </div>
  );
}
