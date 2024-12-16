"use client";

import usePlayer from "@/hooks/usePlayerStore";
import PlayerContent from "./PlayerContent";
import { useState } from "react";
import { getTrackById } from "@/client";
import { useQuery } from "@tanstack/react-query";

const Player = () => {
  const [expand, setExpand] = useState(false);
  const player = usePlayer();

  const { data: song, isLoading } = useQuery({
    queryKey: [`tracks`, player.activeId],
    queryFn: async () =>
      getTrackById({ path: { track_id: player.activeId! } }).then(
        (data) => data.data,
      ),
    enabled: !!player.activeId,
  });

  const songUrl = song ? song.source : "";

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <PlayerContent
      key={songUrl}
      song={song}
      songUrl={songUrl}
      expand={expand}
      setExpand={setExpand}
    />
  );
};

export default Player;
