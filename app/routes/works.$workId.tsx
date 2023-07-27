import { json, type LoaderFunction } from "@remix-run/cloudflare";
import { type Work } from "~/routes/types/work";
import { Link, useLoaderData } from "@remix-run/react";
import { PageBase } from "~/routes/components/page-base";

interface Env {
  DB: D1Database;
}

type LoaderResponse = {
  work: Work;
  text: string;
};

export const loader: LoaderFunction = async ({ context, params }) => {
  const env = context.env as Env;

  const { workId } = params;
  const work = await env.DB.prepare(
    `select * from works where id = ${workId}`,
  ).first<Work>();

  const text = await (await fetch(work.file)).text();

  return json({ work, text });
};

export default function _index() {
  const { work, text }: LoaderResponse = useLoaderData<typeof loader>();

  return (
    <PageBase>
      <div
        className={
          "text-blue-500 underline hover:opacity-50 transition-opacity"
        }
      >
        <Link to={"/"}>&lt; 回首頁</Link>
      </div>
      <div className={"flex flex-col gap-y-2"}>
        <div className={"font-bold text-2xl"}>{work.title}</div>
        <div>{work.author} 著</div>
        <div>油雞 譯</div>
      </div>
      <div className={"whitespace-pre-wrap"}>{text}</div>
    </PageBase>
  );
}
