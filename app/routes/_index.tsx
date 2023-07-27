import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { Logo } from "~/routes/components/common/logo";
import { Intro } from "~/routes/intro";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "望月文庫 | Mochizuki Bunko" },
    {
      name: "望月文庫是一個收錄日本文學作品翻譯的數位圖書館",
      content: "歡迎來到望月文庫",
    },
  ];
};

export default function Index() {
  return (
    <div className={"flex justify-center"}>
      <div className={"max-w-lg w-screen py-10"}>
        <div className={"flex justify-center"}>
          <Logo />
        </div>
        <Intro />
      </div>
    </div>
  );
}
