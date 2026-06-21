import trollFace from "../assets/TrollFace.png"

export default function Header(){
    return(
        <header className="w-full h-16 flex gap-2 justify-start items-center px-15 bg-linear-210 from-[#ECB65F] to-[#E89951] ">
           <img src={trollFace} alt="" width={40} />
           <h1 className="text-white font-semibold text-xl ">Meme Generator</h1>
           
        </header>
    )
}