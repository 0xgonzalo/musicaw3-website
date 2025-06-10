import { useRef } from "react";

export default function DropSelector() {
  const handleSelect = (e) => {
    const anchor = document.getElementById(e.target.value);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-2 bg-[#D9D9D9] p-8 rounded-md">
      <select
        className="text-center border rounded-md bg-black text-white py-2 px-4 font-bold max-w-xs"
        onChange={handleSelect}
        defaultValue=""
      >
        <option value="" disabled>
          Selecciona un Drop
        </option>
        {[...Array(13)].map((_, i) => (
          <option key={i + 1} value={String(i + 1).padStart(2, "0")}>{`Drop Colectivo Vol.${i + 1}`}</option>
        ))}
      </select>
    </div>
  );
}