"use client";

import SearchInput from "@/components/SearchInput/SearchInput";
import Image from "next/image";
import { Page } from "@/components/Page";
import { useEffect, useState} from "react";
import SongItem from "@/components/SongItem/SongItem";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { useQuery } from "@tanstack/react-query";
import { searchTracks } from "@/client";
import { useDebounce } from "use-debounce";
import useOnPlay from "@/hooks/useOnPlay";
import FirstSong from "@/components/SongItem/FirstSong";
import { Skeleton } from "@telegram-apps/telegram-ui";

// interface SearchProps {
//   searchParams: {
//     title: string;
//   };
// }

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [value] = useDebounce(query, 1000);

  useEffect(() => {
    const query = {
      title: value,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [value, router]);

  const { data, isLoading } = useQuery({
    queryKey: [`tracks`, value],
    queryFn: async () => searchTracks({ query: { query: value } }),
    enabled: !!value,
  });

  const onPlay = useOnPlay(data?.data?.tracks ? data.data.tracks : []);

  return (
    <Page back={true}>
      <div className={"px-3 py-5 box flex flex-col"}>
        <div className={"flex justify-center items-center flex-col gap-y-1"}>
          <div
            className={
              "p-1.5 border-2 border-[#ddd] bg-[#424242]/[.3] rounded-3xl"
            }
          >
            <Image
              className={"w-[100px] h-[100px] rounded-3xl"}
              src={"/images/favBg-4.jpg"}
              alt={"image"}
              width={50}
              height={50}
            />
          </div>

          <h2 className={"text-center text-[1.2rem] font-bold mb-4"}>Search</h2>
        </div>
        <div className={"mb-4"}>
          <SearchInput value={query} setValue={setQuery} />
        </div>

        <div>
          {!!data?.data?.tracks.length && (
            <>
              <h2 className={"font-semibold text-[18px] mb-1"}>Best Result</h2>
              <Skeleton visible={isLoading}>
                <FirstSong
                  data={data.data.tracks[0]}
                  onClick={(id: string) => onPlay(id)}
                />
              </Skeleton>
            </>
          )}
          {data ? (
            data?.data?.tracks &&
            data.data.tracks.slice(1).map((track) => (
              <Skeleton key={track.id} visible={isLoading}>
                <SongItem data={track} onClick={(id: string) => onPlay(id)} />
              </Skeleton>
            ))
          ) : (
            <>
              <h2 className={"font-medium text-[18px] mb-1"}>
                Based on your tastes
              </h2>

              <div className={"flex flex-col gap-y-1"}>
                <Skeleton
                  visible
                  className={"p-3 section-bg-color rounded-3xl"}
                >
                  <div className={"w-20 h-20 rounded-3xl bg-black"}></div>
                </Skeleton>
                <Skeleton
                  visible
                  className={"p-3 section-bg-color rounded-3xl"}
                >
                  <div className={"w-20 h-20 rounded-3xl bg-black"}></div>
                </Skeleton>
                <Skeleton
                  visible
                  className={"p-3 section-bg-color rounded-3xl"}
                >
                  <div className={"w-20 h-20 rounded-3xl bg-black"}></div>
                </Skeleton>
              </div>

            </>
          )}



          {/*{nameList.map((item) => {*/}
          {/*  return (*/}
          {/*    <div*/}
          {/*      key={item.id}*/}
          {/*      className={*/}
          {/*        "flex items-center justify-between p-3 section-bg-color rounded-xl my-1"*/}
          {/*      }*/}
          {/*    >*/}
          {/*      <div className={"flex items-center gap-x-4 ml-2"}>*/}
          {/*        <FaPlay size={18} />*/}
          {/*        <div className={"w-10 h-10 bg-neutral-600 rounded-xl"}></div>*/}
          {/*        <div>{item.title}</div>*/}
          {/*      </div>*/}

          {/*      <div className={"mr-2"}>{item.duration}</div>*/}
          {/*    </div>*/}
          {/*  );*/}
          {/*})}*/}
        </div>
      </div>
    </Page>
  );
};

export default Search;
