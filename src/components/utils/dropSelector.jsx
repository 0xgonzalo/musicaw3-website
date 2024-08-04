import Link from "next/link";

export default function DropSelector() {
  return(
    <div className="flex justify-center items-center gap-2 background-color bg-[#D9D9D9] p-3 rounded-md">
      <Link href='#drop-1'><button className="text-center max-w-[132px] border rounded-md bg-black py-2 px-1 font-bold">Collective Drop vol.1</button></Link>
      <Link href='#drop-2'><button className="text-center max-w-[132px] border rounded-md bg-black py-2 px-1 font-bold">Collective Drop vol.2</button></Link>
      <Link href='#drop-3'><button className="text-center max-w-[132px] border rounded-md bg-black py-2 px-1 font-bold">Collective Drop vol.3</button></Link>
      <Link href='#drop-4'><button className="text-center max-w-[132px] border rounded-md bg-black py-2 px-1 font-bold">Collective Drop vol.4</button></Link>
      <Link href='#drop-5'><button className="text-center max-w-[132px] border rounded-md bg-black py-2 px-1 font-bold">Collective Drop vol.5</button></Link>
      <Link href='#drop-6'><button className="text-center max-w-[132px] border rounded-md bg-black py-2 px-1 font-bold">Collective Drop vol.6</button></Link>
      <Link href='#drop-7'><button className="text-center max-w-[132px] border rounded-md bg-black py-2 px-1 font-bold">Collective Drop vol.7</button></Link>
    </div>
  )
}