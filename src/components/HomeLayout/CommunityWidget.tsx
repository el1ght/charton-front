import Image from "next/image";

interface CommunityWidgetProps {
  handleClick: () => void;
}

const CommunityWidget: React.FC<CommunityWidgetProps> = ({ handleClick }) => {
  return (
    <div
      className={"section-bg-color p-3 rounded-xl flex justify-between mx-3 "}
    >
      <div
        onClick={handleClick}
        className={"flex gap-x-2 items-center cursor-pointer"}
      >
        <div className={"h-12 w-12 bg-black rounded-full"}>
          <Image
            src={
              "https://cdn5.cdn-telegram.org/file/HcY4jBVGMis_pPjKgsh1ArFU9PG5c1yPcu4PHgIJjAH6s68cPU9rrZw2oQz9g3wta-OzkPAHgAab95lZ8Gsv9vOOEQVcsXfkxFG2tTy7ke-ljgRqEkx5u7PZFzKwmgJDSP8kuy3bUzTKKC2WaDmPsS9gijlT8TiJfdes2Yahpvfy5OviO8eAviwpYPBgnHRfKXEKMULoBVY9W_Y3yMUM3CBsa_shQaCh96PBJkRC6dValUczDQ0ZYGMKxUcXtUpOVZxQiTPGxdcW_wEdXIM2p9HMIssHTE__yzZgoDMlikyveo7_7gTvJTEbrl9y5n-VwAo48fWLZDT0GcfhBGA0Yg.jpg"
            }
            alt={""}
            width={100}
            height={100}
            className={"w-full h-full rounded-full"}
          />
        </div>
        <div>
          <h4 className={"font-semibold text-color"}>Charton Community</h4>
          <p className={"text-[12px] text-color"}>Waiting for you</p>
        </div>
      </div>
      <div
        onClick={handleClick}
        className={
          "button-color text-color py-2 px-3 rounded-3xl font-semibold flex items-center justify-center active:scale-95 transition"
        }
      >
        Follow
      </div>
    </div>
  );
};

export default CommunityWidget;
