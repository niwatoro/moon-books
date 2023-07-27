import { json, type LoaderFunction } from "@remix-run/cloudflare";
import { type Work } from "~/routes/types/work";
import { useLoaderData } from "@remix-run/react";
import { PageBase } from "~/routes/components/page-base";

interface Env {
  DB: D1Database;
}

export const loader: LoaderFunction = async ({ context, params }) => {
  const env = context.env as Env;

  const { workId } = params;
  const work = await env.DB.prepare(
    `select * from works where id = ${workId}`,
  ).first<Work>();

  return json({ work });
};

export default function _index() {
  const { work } = useLoaderData<typeof loader>();

  return <PageBase>{work.title}</PageBase>;
}
