import { useState } from "react"
import memeImage from "../assets/memeImage.png"

export default function Home(){
    const [meme, setMeme] = useState(
        {
            topText: "One does not simply",
            bottomText: "Into the mordor",
            imgUrl: memeImage
        }
    )

    function handleChange(e) {
        const {value, name} = e.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
    <main className='flex justify-center items-center'>
        <div className="min-w-xl min-h-full py-16 flex flex-col gap-8">
            <div className="form">
                <div className="flex gap-5">
                    <label className="flex flex-col gap-2 text-lg">Top Text
                        <input name="topText" value={meme.topText} onChange={handleChange} placeholder="Input Here..." className="text-base min-w-72 py-2 px-2 outline-[#CCCCCC] outline-[1.5px]  rounded-md" type="text"/>
                    </label>
                    <label className="flex flex-col gap-2 text-lg">Bottom Text
                        <input name="bottomText" value={meme.bottomText}  onChange={handleChange} placeholder="Input Here..." className="text-base min-w-72 py-2 px-2 outline-[#CCCCCC] outline-[1.5px]  rounded-md" type="text"/>
                    </label>
                </div>
            </div>
            <button className="w-full h-12 bg-linear-210 from-[#ECB65F] to-[#E89951] text-white text-lg font-semibold  rounded-md"> Get a new meme image🖼️</button>
            <div className="meme relative w-full">
                <img
                    className="block w-full h-auto"
                    src={meme.imgUrl}
                    alt="image-holder"
                />
                <span className="absolute font-impact [-webkit-text-stroke:1px_black] tracking-wide top-2 left-0 right-0 px-4 text-center text-[3rem] font-bold uppercase text-white">
                    {meme.topText}
                </span>
                <span className="absolute font-impact [-webkit-text-stroke:1px_black] tracking-wide bottom-2 left-0 right-0 px-4 text-center text-[3rem] font-bold uppercase text-white">
                    {meme.bottomText}
                </span>
            </div>
        </div>
       
        
       
    </main>
    )
}