'use client'

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  const HandleAgeSaveAndRedirect = (ageRange: string) => {
    localStorage.setItem("@age", ageRange);
    router.push('/pressel');
  };

  return (
    <>
      <h1 className="text-center text-3xl text-gray-50 pr-10 pl-10 font-bold">
        Plano de treino personalizado de acordo com a sua idade
      </h1>
      <p className="text-center pt-5 text-zinc-400 font-bold text-md">
        questionário de 1 minuto
      </p>
      <section className="flex items-center justify-center w-full mt-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full items-center justify-center pr-10 pl-10">
          <div
            className="bg-[#28292b] flex rounded-md items-center justify-center relative h-32 md:h-56"
            onClick={() => HandleAgeSaveAndRedirect("18-34")}
          >
            <img src="avatar1.png" alt="" />
            <div className="absolute bottom-0 w-full bg-blue-700 h-10 flex items-center justify-center text-white">
              <p>18-34</p>
            </div>
          </div>
          <div
            className="bg-[#28292b] flex rounded-md items-center justify-center relative h-32 md:h-56"
            onClick={() => HandleAgeSaveAndRedirect("35-44")}
          >
            <img src="avatar2.png" alt="" />
            <div className="absolute bottom-0 w-full bg-blue-700 h-10 flex items-center justify-center text-white">
              <p>35-44</p>
            </div>
          </div>
          <div
            className="bg-[#28292b] flex rounded-md items-center justify-center relative h-32 md:h-56"
            onClick={() => HandleAgeSaveAndRedirect("45-54")}
          >
            <img src="avatar3.png" alt="" />
            <div className="absolute bottom-0 w-full bg-blue-700 h-10 flex items-center justify-center text-white">
              <p>45-54</p>
            </div>
          </div>
          <div
            className="bg-[#28292b] flex rounded-md items-center justify-center relative h-32 md:h-56"
            onClick={() => HandleAgeSaveAndRedirect("55+")}
          >
            <img src="avatar4.png" alt="" />
            <div className="absolute bottom-0 w-full bg-blue-700 h-10 flex items-center justify-center text-white">
              <p>55+</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
