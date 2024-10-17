"use client";

import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};
const LoginButton = ({
  children,
  mode = "redirect",
  asChild = false,
}: Props) => {
  const router = useRouter();
  const clickHandler = () => {
    router.push("auth/login");
  };
  if (mode === "modal") {
    return <span>TODO: implement modal</span>;
  }
  return (
    <span onClick={clickHandler} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
