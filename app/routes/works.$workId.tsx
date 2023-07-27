import { json,type LoaderFunction } from "@remix-run/cloudflare";
import {type Work } from "~/routes/types/work";
import { fetch } from "miniflare";
import { useLoaderData } from "@remix-run/react";

interface Env {
  DB: D1Database;
}

export const loader: LoaderFunction = async ({ context, params }) => {
  const env = context.env as Env;

  const { workId } = params;
  const work = await env.DB.prepare(
    `select * from works where id = ${workId}`,
  ).first<Work>();

  const text = await fetch(work.file);

  return json({ work, text });
};

export default function _index() {
  const { work, text } = useLoaderData<typeof loader>();
  console.log(work, text);

  return <div></div>;
}
