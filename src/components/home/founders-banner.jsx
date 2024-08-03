import Image from "next/image"

export default function FoundersBanner() {
  return(
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-8xl my-[96px]"> FOUNDERS </h2>
        <div className="grid grid-cols-2 gap-8 mb-[96px]">
        <Image
              src={'/founders/yoshi.png'}
              width={384}
              height={384}
              alt="Picture of the author"
            />
        <Image
              src={'/founders/gonza.png'}
              width={384}
              height={384}
              alt="Picture of the author"
            />
        <Image
              src={'/founders/nenx.png'}
              width={384}
              height={384}
              alt="Picture of the author"
            />
        <Image
              src={'/founders/sol.png'}
              width={384}
              height={384}
              alt="Picture of the author"
            />
        </div>
      </div>
    </div>
  )
}