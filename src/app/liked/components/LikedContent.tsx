"use client";

import SongItem from "@/components/SongItem/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Track } from "@/client";

interface LikedContentProps {
  songs: Track[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="mt-2 text-neutral-400">No songs available.</div>;
  }
  return (
    <div>
      {songs.map((item: Track) => (
        <SongItem
          key={item.id}
          onClick={(id: string) => onPlay(id)}
          data={item}
        />
      ))}
    </div>
  );
};

export default LikedContent;
