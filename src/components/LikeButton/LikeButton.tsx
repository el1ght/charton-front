"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import toast from "react-hot-toast";

interface LikeButtonProps {
    // songId: string;
  size: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({
    size,
}) => {
  const router = useRouter();

  const [isLiked, setIsLiked] = useState(false);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  // useEffect(() => {
  //     if (!user?.id){
  //         return;
  //     }
  // }, [songId, user?.id]);

  const handleLike = async () => {
    // if (!user) {
    //     return authModal.onOpen();
    // }

    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
      toast.success("Liked!");
    }

    router.refresh();
  };

  return (
    <button onClick={handleLike}>
      <Icon size={size === "small" ? 22 : 26} />
    </button>
  );
};

export default LikeButton;
