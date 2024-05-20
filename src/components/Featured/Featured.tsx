"use client";

import useSWR from "swr";
interface Plant {
  id: number;
  title: string;
  img: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export const Featured = () => {
  // const fileToBase64 = (file: File | null): Promise<string> => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file as Blob);
  //     reader.onload = () => resolve(reader.result as string);
  //     reader.onerror = (error) => reject(error);
  //   });
  // };

  // const handleChangeImg = async (e: ChangeEvent<HTMLInputElement>) => {
  //   try {
  //     const file = e.target.files && e.target.files[0];
  //     const base64 = await fileToBase64(file);
  //     setImg(base64);
  //   } catch (error) {
  //     console.error("Error converting file to base64:", error);
  //   }
  // };
  const { data, isLoading, error } = useSWR(
    "http://localhost:3001/plants",
    fetcher
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{data?.map((plant: Plant) => plant.title)}</div>;
};
