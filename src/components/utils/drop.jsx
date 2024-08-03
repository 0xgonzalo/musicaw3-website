import Image from "next/image"
export default function Drop( { id, title, location, description } ) {
  
  return(
    <div>
      <div className="flex justify-center items-center gap-[48px] my-32">
        <h3 className="text-8xl">{id}</h3>
          <div className="flex items-center gap-8">
            <Image
              src={`${location}`}
              width={336}
              height={336}
              alt="Picture of the author"
            />
            <div>
              <h3 className="text-6xl">{title}</h3>
              <p className="max-w-[384px] text-left my-4 font-light text-[12px]">{description}</p>
            </div> 
          </div>
      </div>
    </div>
  )
}