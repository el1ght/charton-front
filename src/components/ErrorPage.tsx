import { useEffect } from "react";
import Link from "next/link";
import logo from "../../assets/logo.svg";
import Image from "next/image";

export function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset?: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  if (error.message.includes("you have opened your app outside Telegram")) {
    return (
      <div
        className={
          "h-full flex flex-col justify-center items-center text-center"
        }
      >
        <Image
          src={logo}
          alt={""}
          width={100}
          height={100}
          className={"mb-2"}
        />
        <h2 className={"text-[22px] font-semibold mb-2"}>
          Seems like you open Charton outside Telegram
        </h2>
        <p className={"text-neutral-500 text-[16px] text-center"}>
          <Link
            href={"https://t.me/TheCharton_bot"}
            className={"text-cyan-400"}
          >
            Here{"\u00A0"}
          </Link>
          you can launch the application via a telegram bot
        </p>
        <div className={"text-neutral-500 mt-3 text-center"}>
          Join the Charton community, all project updates in the{"\u00A0"}
          <Link href={"https://t.me/TheCharton"} className={"text-cyan-400"}>
            official Channel
          </Link>
        </div>
        <p className={"mt-1 font-medium"}>Tune in. Take Over 🫦</p>
      </div>
    );
  }

  return (
    <div>
      <h2>An unhandled error occurred!</h2>
      <blockquote>
        <code>{error.message}</code>
      </blockquote>
      {reset && <button onClick={() => reset()}>Try again</button>}
    </div>
  );
}
