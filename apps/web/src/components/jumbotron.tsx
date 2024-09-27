import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex space-x-5 flex-col md:flex-row">
      <div className="flex-[1]">
        <Image
          className="rounded"
          width={500}
          height={300}
          alt="side"
          src="https://img.freepik.com/free-photo/spirituality-religion-hands-folded-prayer-holy-bible-church-concept-faith_1150-12945.jpg?t=st=1727248974~exp=1727252574~hmac=47e8393eb8ccc27f2b32000c968650f820723d5faf22624a9af3748eab6c277f&w=1060"></Image>
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
