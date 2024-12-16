"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import LikeButton from "../LikeButton/LikeButton";
import { Track } from "@/client";
import {TbPlaylistAdd} from "react-icons/tb";
import {Divider} from "@telegram-apps/telegram-ui";

interface SongItemProps {
    data: Track[] | any;
    onClick: (id: string) => void;
}

const FirstSong: React.FC<SongItemProps> = ({ data, onClick }) => {

  return (
      <div onClick={() => onClick(data.id)} className={"section-bg-color rounded-2xl p-3 pb-2"}>
                <div  className={"flex justify-between mb-4"}>
                    <div className={"rounded-3xl w-24 h-24 bg-black"}>
                        <Image src={data.thumbnail} alt={""} width={100} height={100} className={"w-full h-full rounded-3xl"} />
                    </div>

                    <div className={"flex gap-x-2"}>
                        <div className={"border section-separator-color-border rounded-3xl h-16 w-16 flex items-center justify-center "}>
                            <TbPlaylistAdd size={20} />
                        </div>
                        <div className={"border section-separator-color-border rounded-3xl h-16 w-16 flex items-center justify-center "}>
                            <LikeButton size={"small"} />
                        </div>
                    </div>


                </div>

                <Divider />

                <div className={"flex justify-between items-center mt-2"}>
                    <div onClick={() => onClick(data.id)} className={"flex flex-col max-w-[70vw] "}>
                        <h2 className={"font-bold text-[18px] truncate"}>{data.title}</h2>
                        <p className={"text-[0.9rem] subtitle-text-color truncate"}>
                            {data.authors &&
                                data.authors.map((author: any) => author.name).join(", ")}
                        </p>
                    </div>

                    <FaPlay size={20} className={"mr-1"} />
                </div>

            </div>
    )

}

export default FirstSong;
