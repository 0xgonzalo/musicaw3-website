import Masonry from "../utils/masonry";

export default function EventsBanner() {
  return(
    <div className="w-full h-full">
      <div className="flex justify-center">
        <h2 className="text-8xl my-[96px] font-stretchFont"> EVENTS </h2>
      </div>
      <div>
        <Masonry />
      </div>
    </div>
  )
}