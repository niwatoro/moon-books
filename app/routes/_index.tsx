import type { LoaderFunction, V2_MetaFunction } from "@remix-run/cloudflare";
import { Logo } from "~/routes/components/logo";
import { Intro } from "~/routes/intro";
import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/cloudflare";
import { Work } from "~/routes/types/work";
import { PageBase } from "~/routes/components/page-base";

interface Env {
  DB: D1Database;
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "望月文庫 | Mochizuki Bunko" },
    {
      name: "望月文庫是一個收錄日本文學作品翻譯的數位圖書館",
      content: "歡迎來到望月文庫",
    },
  ];
};

export const loader: LoaderFunction = async ({ context, params }) => {
  const env = context.env as Env;

  const { results } = await env.DB.prepare("select * from works").all<Work>();
  return json({ works: results ?? [] });
};

export default function _index() {
  const { works } = useLoaderData<typeof loader>();

  return (
    <PageBase>
      <div className={"flex justify-center"}>
        <Logo />
      </div>
      <Intro />
      {works && (
        <div>
          {works.map((work: Work) => {
            return (
              <Link
                key={work.id}
                to={`/works/${work.id}`}
                className={
                  "rounded hover:opacity-50 transition-opacity shadow-lg flex flex-col gap-y-1 border border-zinc-200 p-4"
                }
              >
                <div className={"font-bold text-2xl"}>{work.title}</div>
                <div>{work.author}</div>
              </Link>
            );
          })}
        </div>
      )}
    </PageBase>
  );
}
