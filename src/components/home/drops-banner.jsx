import { useState } from "react";
import Drop from "../utils/drop";
import DropSelector from "../utils/dropSelector";
import dropList from "@/components/data/dropList.js"

export default function DropsBanner() {
  const [selectedDropId, setSelectedDropId] = useState("");

  const handleDropSelect = (dropId) => {
    setSelectedDropId(dropId);
  };

  const selectedDrop = dropList.find(drop => drop.id === selectedDropId);

  return(
    <div className="w-full h-full">
      <div className="flex flex-col justify-center text-center items-center">
        <h2 className="font-stretchFont text-4xl md:text-8xl mt-[96px]" id="drops"> DROPS </h2>
        <p className="max-w-[830px] lg:max-w-[1040px] py-[48px]">Los lanzamientos colectivos de MúsicaW3 son publicaciones mensuales en las que reunimos a artistas consolidados dentro del ecosistema web3 junto con nuevos talentos y músicos atraídos por la comunidad. Creemos que es vital crear espacios promocionales donde el apoyo y los efectos de red colaborativos sean expansivos para todos los participantes.</p>
        <DropSelector onDropSelect={handleDropSelect} />
        <div>
          {selectedDrop && <Drop {...selectedDrop} />}
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}