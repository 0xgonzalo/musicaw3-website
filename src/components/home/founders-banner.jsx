import Image from "next/image"
import Link from 'next/link'

export default function FoundersBanner() {
  return(
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-stretchFont text-4xl md:text-8xl my-[96px]"> FOUNDERS </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[96px]">
        <div className="relative group">
          <Image
                src={'/founders/yoshi.png'}
                width={384}
                height={384}
                alt="Picture of the author"
                layout="fixed"
                className="rounded-full w-[300px] md:w-[384px] "
              />
          <div className="absolute top-0 left-0 w-[300px] md:w-full h-full bg-[#500E61] bg-opacity-50 flex items-center justify-center rounded-full hidden group-hover:block">
            <Link href="https://twitter.com/yoshiromare" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center h-full">
              <h3 className="text-white text-center">Yoshiro</h3>
            </Link>
          </div>
        </div>
        <div className="relative group">
          <Image
                src={'/founders/gonza.png'}
                width={384}
                height={384}
                alt="Picture of the author"
                layout="fixed"
                className="rounded-full w-[300px] md:w-[384px]"
              />
          <div className="absolute top-0 left-0 w-[300px] md:w-full h-full bg-[#500E61] bg-opacity-50 flex items-center justify-center rounded-full hidden group-hover:block">
            <Link href="https://twitter.com/0xgonzalo_" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center h-full">
              <h3 className="text-white text-center">0xGonzalo</h3>
            </Link>
          </div>
        </div>
        <div className="relative group">
          <Image
                src={'/founders/nenx.png'}
                width={384}
                height={384}
                alt="Picture of the author"
                layout="fixed"
                className="rounded-full w-[300px] md:w-[384px]"
              />
          <div className="absolute top-0 left-0 w-[300px] md:w-full  h-full bg-[#500E61] bg-opacity-50 flex items-center justify-center rounded-full hidden group-hover:block">
            <Link href="https://twitter.com/n_e_n_x" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center h-full">
              <h3 className="text-white text-center">NENX</h3>
            </Link>
          </div>
        </div>
        <div className="relative group">
          <Image
                src={'/founders/sol.png'}
                width={384}
                height={384}
                alt="Picture of the author"
                layout="fixed"
                className="rounded-full w-[300px] md:w-[384px]"
              />
          <div className="absolute top-0 left-0 w-[300px] md:w-full  h-full bg-[#500E61] bg-opacity-50 flex items-center justify-center rounded-full hidden group-hover:block">
            <Link href="https://twitter.com/solsiete_web3" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center h-full">
              <h3 className="text-white text-center">Sol Siete</h3>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}