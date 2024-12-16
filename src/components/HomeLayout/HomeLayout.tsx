"use client";

import {
  initData,
  openTelegramLink,
  useSignal,
} from "@telegram-apps/sdk-react";
import CommunityWidget from "@/components/HomeLayout/CommunityWidget";
import PlaylistsCarousel from "@/components/HomeLayout/PlaylistsCarousel";
import PlaylistCard from "@/components/HomeLayout/PlaylistCard";
import SongCard from "@/components/HomeLayout/SongCard";

const HomeLayout = () => {
  const initDataUser = useSignal(initData.user);

  const handleClick = () => {
    openTelegramLink("https://t.me/TheCharton");
  };

  return (
    <div className={"relative py-5 box flex flex-col gap-y-8 text-color"}>
      <CommunityWidget handleClick={handleClick} />
      {initDataUser ? (
        <>
          <div className={"flex flex-col gap-y-3"}>
            <div className={"text-[20px] font-bold text-color ml-3"}>
              Hey,{" "}
              <span className={"subtitle-text-color"}>
                {initDataUser.firstName}
              </span>
              , wanna smth special?
            </div>
            <div
              className={
                "px-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1"
              }
            >
              <SongCard />
              <SongCard />
              <SongCard />

            </div>
          </div>

          <PlaylistsCarousel
            title={"Based on your preferences"}
            isAlbum={false}
            isAuthor={false}
            isSimilar={false}
            authorName={""}
          />

          <PlaylistsCarousel
            title={"Miss you"}
            isAlbum={true}
            isAuthor={false}
            isSimilar={false}
            authorName={""}
          />

          <PlaylistsCarousel
            title={""}
            isAlbum={false}
            isAuthor={true}
            isSimilar={false}
            authorName={"LXST CXNTURY"}
          />

          <PlaylistsCarousel
            title={"From your playlists"}
            isAlbum={false}
            isAuthor={false}
            isSimilar={false}
            authorName={""}
          />

          {/*<div className={"flex flex-col gap-y-3 mx-3"}>*/}
          {/*  <div*/}
          {/*    className={*/}
          {/*      "text-[18px] font-bold text-color flex justify-between"*/}
          {/*    }*/}
          {/*  >*/}
          {/*    <h3>Mix for you</h3>*/}
          {/*    <Link*/}
          {/*      href={"/mix"}*/}
          {/*      className={*/}
          {/*        "font-normal text-[12px] flex items-center justify-center py-1 px-3 border section-separator-color-border rounded-3xl"*/}
          {/*      }*/}
          {/*    >*/}
          {/*      More*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    /!*{recentTracks.map((track) =>*!/*/}
          {/*    /!*  getTrackById({ path: { track_id: track } }).then((data) => (*!/*/}
          {/*    /!*    <SongItem data={data?.data} onClick={() => {}} />*!/*/}
          {/*    /!*  )),*!/*/}
          {/*    /!*)}*!/*/}
          {/*  </div>*/}
          {/*</div>*/}

          <PlaylistsCarousel
            title={"Playlists for you"}
            isAlbum={false}
            isAuthor={false}
            isSimilar={false}
            authorName={""}
          />

          <PlaylistsCarousel
            title={""}
            isAlbum={false}
            isAuthor={false}
            isSimilar={true}
            authorName={"LXST CXNTURY"}
          />

          <PlaylistsCarousel
            title={"Albums for you"}
            isAlbum={true}
            isAuthor={false}
            isSimilar={false}
            authorName={""}
          />

          <PlaylistsCarousel
            title={""}
            isAlbum={false}
            isAuthor={true}
            isSimilar={false}
            authorName={"Night Lovell"}
          />

          {/*<div*/}
          {/*  className={*/}
          {/*    "absolute bottom-6 left-0 right-0 text-center subtitle-text-color mr-3"*/}
          {/*  }*/}
          {/*>*/}
          {/*  <p className={"text-[12px]"}>*/}
          {/*    Didn&#39;t find anything for yourself?*/}
          {/*  </p>*/}
          {/*  <p className={"text-[12px]"}>Try our smart (common) search</p>*/}
          {/*</div>*/}
        </>
      ) : (
        <div className={"flex flex-col gap-y-3"}>
          <div className={"text-[20px] font-bold text-color ml-3"}>
            Hey, <span className={"subtitle-text-color"}>Sweetie</span>, wanna
            smth special?
          </div>
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default HomeLayout;
