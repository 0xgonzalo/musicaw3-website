import Drop from "../utils/drop";
import DropSelector from "../utils/dropSelector";
import dropList from "@/components/data/dropList.js"

export default function DropsBanner() {
  return(
    <div className="w-full h-full">
      <div className="flex flex-col justify-center text-center items-center">
        <h2 className="text-8xl mt-[96px] font-stretchFont"> DROPS </h2>
        <p className="max-w-[830px] py-[48px]">MúsicaW3's collective drops are monthly releases where we bring together established artists within the web3 
          ecosystem with new talents and musicians attracted by the community. We believe it is vital to create promotional 
          spaces where support and collaborative network effects are expansive for all participants.</p>
        <DropSelector />
        <div>
        {dropList.map((drop, index) => (
          <Drop key={index} {...drop} />
        ))}
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}