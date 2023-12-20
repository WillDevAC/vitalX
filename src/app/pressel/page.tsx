"use client";

import { useRouter } from "next/navigation";

export default function Pressel() {
  const router = useRouter();

  const handlePresselClick = () => {
    router.push("/pressel/stepOne");
  };

  return (
    <>
      <h1 className="text-center text-3xl text-gray-50 pr-10 pl-10 font-bold">
        +100 mil usuários
      </h1>
      <p className="text-center pt-5 text-zinc-400 font-bold text-md">
        utilizam nosso plano de treinos
      </p>
      <section className="flex items-center flex-col justify-center w-full mt-7">
        <img src="pressel.png" alt="Pressel Avatar" />
        <button
          className="mt-16 flex items-center justify-center bg-blue-700 text-white w-80 h-14 font-semibold rounded-lg"
          onClick={() => handlePresselClick()}
        >
          CONTINUAR
        </button>
      </section>
    </>
  );
}
