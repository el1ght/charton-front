"use client";

import Image from "next/image";
import { Page } from "@/components/Page";
import { initData, useSignal } from "@telegram-apps/sdk-react";
import {Button, Divider, Skeleton} from "@telegram-apps/telegram-ui";

const Profile = () => {
  const initDataUser = useSignal(initData.user);
  const profileAvatar = initDataUser?.photoUrl
    ? initDataUser.photoUrl
    : "/images/favBg-4.jpg";

  return (
    <Page back={true}>
      <div
        className={"relative px-3 py-5 box flex flex-col gap-y-4 text-color"}
      >
        <div className={"flex flex-col justify-center items-center gap-y-1 "}>
          <div
            className={
              "p-1.5 border-2 border-[#ddd] bg-[#424242]/[.3] rounded-3xl "
            }
          >
            <Image
              src={profileAvatar}
              alt={"image"}
              width={30}
              height={30}
              className={"w-[100px] h-[100px] rounded-3xl"}
            ></Image>
          </div>

          <div className={"text-center"}>
            <h2
              className={
                "text-center text-[1.2rem] font-bold subtitle-text-color"
              }
            >
              Hey,{" "}
              <span className={"text-color"}>
                {initDataUser ? initDataUser?.firstName : "undefined"}
              </span>
            </h2>
            <p className={"subtitle-text-color"}>
              {initDataUser ? `@${initDataUser?.username}` : "@undefined"}
            </p>
          </div>
        </div>

        <div className={"flex flex-col gap-y-1"}>
          <div className={"flex justify-center items-center"}>

              <Skeleton visible
                className={
                  "min-w-[103px] grow flex flex-col justify-center items-center p-3 rounded-2xl section-bg-color"
                }
              >
                <h3 className={"text-[13px] subtitle-text-color leading-5"}>
                  Total
                </h3>
                <p className={"font-bold leading-5 text-color"}>200h</p>
              </Skeleton>

              <Skeleton visible
                className={
                  "grow flex flex-col justify-center items-center px-2 py-3 rounded-2xl section-bg-color"
                }
              >
                <h3 className={"text-[13px] subtitle-text-color leading-5"}>
                  Subscription
                </h3>
                <p className={"font-bold leading-5 text-color"}>PRO</p>
              </Skeleton>

              <Skeleton visible
                className={
                  " min-w-[103px] grow flex flex-col justify-center items-center p-3 rounded-2xl section-bg-color"
                }
              >
                <h3 className={"text-[13px] subtitle-text-color leading-5"}>
                  Friends
                </h3>
                <p className={"font-bold leading-5 text-color"}>134</p>
              </Skeleton>
          </div>
          <h2 className={"text-[20px] font-semibold mt-2"}>Leaderboard</h2>

          <Skeleton visible>
            <div className={"section-bg-color rounded-2xl p-4 text-center"}>
              <h2 className={"text-[16px] font-semibold "}>Rank #1</h2>
              <p className={"text-[14px] subtitle-text-color mb-4"}>
                With a total listening time of{" "}
                <span className={"font-semibold text-color"}>200 fkng</span>{" "}
                hours
              </p>

              <Button onClick={() => {}} mode="filled" size="m" stretched>
                See the Top
              </Button>
            </div>
          </Skeleton>

          <h2 className={"text-[20px] font-semibold mt-2"}>Airdrop</h2>

          <Skeleton visible>
            <div className={"section-bg-color rounded-2xl p-4 "}>
              <div className={"flex justify-between items-center mb-3"}>
                <div>
                  <h3 className={"text-[16px] font-semibold "}>
                    Airdrop coming soon
                  </h3>
                  <p className={"text-[14px] subtitle-text-color"}>
                    Stay tuned
                  </p>
                </div>
                <div className={"bg-black w-16 h-16 rounded-3xl"}></div>
              </div>

              <Button onClick={() => {}} mode="filled" size="m" stretched>
                Connect TON Wallet
              </Button>
            </div>
          </Skeleton>

          <h2 className={"text-[22px] font-bold mt-1 text-color"}>
            Activities{" "}
          </h2>

            <Skeleton visible className={"section-bg-color rounded-2xl px-4"}>
              <div className={"flex items-center justify-between py-4"}>
                <div className={"flex items-center gap-x-2"}>
                  <div className={"w-12 h-12 bg-black rounded-3xl"}></div>
                  <div className={"flex flex-col"}>
                    <h3 className={"font-semibold text-[16px]"}>
                      Charton Community
                    </h3>
                    <p className={"font-thin text-[14px]"}>1 Day Premium</p>
                  </div>
                </div>
                <div
                  className={"link-color py-2 px-4 rounded-full font-medium"}
                >
                  Open
                </div>
              </div>
              <Divider />
              <div className={"flex items-center justify-between py-4"}>
                <div className={"flex items-center gap-x-2"}>
                  <div className={"w-12 h-12 bg-black rounded-3xl"}></div>
                  <div className={"flex flex-col"}>
                    <h3 className={"font-semibold text-[16px]"}>
                      Guide to Charton
                    </h3>
                    <p className={"font-thin text-[14px]"}>+100</p>
                  </div>
                </div>
                <div
                  className={"link-color py-2 px-4 rounded-full font-medium"}
                >
                  Open
                </div>
              </div>
              <Divider />
              <div className={"flex items-center justify-between py-4"}>
                <div className={"flex items-center gap-x-2"}>
                  <div className={"w-12 h-12 bg-black rounded-3xl"}></div>
                  <div className={"flex flex-col"}>
                    <h3 className={"font-semibold text-[16px]"}>
                      First Transaction
                    </h3>
                    <p className={"font-thin text-[14px]"}>+500</p>
                  </div>
                </div>
                <div
                  className={"link-color py-2 px-4 rounded-full font-medium"}
                >
                  Open
                </div>
              </div>
              <Divider />
              <div className={"flex items-center justify-between py-4"}>
                <div className={"flex items-center gap-x-2"}>
                  <div className={"w-12 h-12 bg-black rounded-3xl"}></div>
                  <div className={"flex flex-col"}>
                    <h3 className={"font-semibold text-[16px]"}>
                      Charton Instagram
                    </h3>
                    <p className={"font-thin text-[14px]"}>+300</p>
                  </div>
                </div>
                <div
                  className={"link-color py-2 px-4 rounded-full font-medium"}
                >
                  Open
                </div>
              </div>
            </Skeleton>
        </div>
      </div>
    </Page>
  );
};

export default Profile;
