"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import LikeButton from "../LikeButton/LikeButton";
import { Track } from "@/client";

interface SongItemProps {
  data: Track[] | any;
  onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div
      className={
        "my-1 p-4 overflow-hidden flex items-center justify-between gap-x-4 rounded-xl cursor-pointer section-bg-color active:section-separator-color transition"
      }
    >
      <div
        onClick={() => onClick(data.id)}
        className={
          "flex flex-row items-center justify-between gap-x-4 h-full w-full"
        }
      >
        <div className={"flex items-center gap-x-3"}>
          <div>
            <FaPlay className={"ml-1"} />
          </div>

          <Image
            className={"w-[50px] h-[50px] rounded-2xl"}
            src={data.thumbnail}
            alt={"Image"}
            width={40}
            height={40}
          />

          <div className={"flex flex-row gap-x-2 items-center"}>
            <div className={"flex flex-col max-w-[40vw]"}>
              <h3 className={"text-color truncate text-[14px] font-medium"}>
                {data.title}
              </h3>

              <p className={"text-[0.7rem] truncate subtitle-text-color"}>
                {data.authors &&
                  data.authors.map((author: any) => author.name).join(", ")}
              </p>
            </div>
          </div>
        </div>

        <p className={"text-[0.8rem] leading-6 subtitle-text-color"}>
          {formatTime(data.duration)}
        </p>
      </div>

      <div className={"flex flex-row gap-x-4"}>
        <LikeButton size={"small"} />
        {/*songId={song.id}*/}
      </div>
    </div>
  );
};

export default SongItem;
