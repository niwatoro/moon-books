import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { Logo } from "~/routes/components/common/logo";

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
        <div className={"flex justify-center"}>
          <Logo />
        </div>
      </div>
    </div>
  );
}
