import type { V2_MetaFunction } from "@remix-run/cloudflare";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Moon Books" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className={"flex justify-center"}>
      <div className={"max-w-lg w-screen py-10"}>
        <div className={"flex justify-center"}>望月文庫</div>
      </div>
    </div>
  );
}
