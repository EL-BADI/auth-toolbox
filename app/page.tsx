import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className=" flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className=" space-y-6">
        <h1 className=" text-6xl font-semibold text-white drop-shadow-md">
          Auth 🔐
        </h1>
        <p className=" text-2xl font-medium text-stone-100 drop-shadow-md">
          A simple auth toolbox for el_badi dev
        </p>
        <div>
          <LoginButton>
            <Button variant={"secondary"}>Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
