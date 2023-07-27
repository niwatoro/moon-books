import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const PageBase: FC<Props> = ({ children }) => {
  return (
    <div className={"flex justify-center"}>
      <div className={"max-w-lg flex flex-col gap-y-8 w-screen py-10"}>{children}</div>
    </div>
  );
};
