import Image from "next/image";

const SongCard = () => {
    return (
        <div className={"rounded-2xl section-bg-color flex gap-y-1 gap-x-1"}>
            <div className={"rounded-2xl rounded-r-none p-3 pr-0 flex flex-col justify-between max-w-[170px]"}>
                <div className={"flex gap-x-2"}>
                    <div className={"text-[12px] rounded-full px-4 py-1 border section-separator-color-border"}>indie</div>
                    <div className={"text-[12px] rounded-full px-4 py-1 border section-separator-color-border"}>rock</div>
                </div>

                <div>
                    <h2 className={"text-[20px] font-bold"}>Workout Mix</h2>
                    <p className={"text-[13px] subtitle-text-color truncate"}>Lana Del Rey, 21 Savage and others others and more others</p>

                    <p className={"text-[12px] mt-2 subtitle-text-color truncate font-medium"}><span className={"text-color"}>284</span> tracks</p>
                </div>

                <div className={"self-start font-semibold link-color px-5 py-2 rounded-full "}>Explore</div>
            </div>
            <div className={" p-2 rounded-2xl w-[110px]"}>
                <Image src={"/images/favBg-4.jpg"} alt={""} width={10} height={10} className={"rounded-2xl h-full w-full"} />
            </div>
        </div>
    );
};

export default SongCard;
