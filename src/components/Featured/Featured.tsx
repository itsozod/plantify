import Image from "next/image";
import styles from "./Featured.module.css";

interface Plant {
  id: number;
  title: string;
  img: string;
}

const wait = async(ms: number) => {
return new Promise((resolve) => setTimeout(resolve, ms))
}

const getPlants = async () => {
  const res = await fetch("http://localhost:3001/plants");
  const data = await res.json();
  return data;
};

export const Featured = async () => {
  const plants: Plant[] = await getPlants();
  await wait (2000)
  return (
    <div
      style={{
        padding: "10px 50px 10px 50px",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ color: "#004f44" }}>Featured</h1>
        <div className={styles["plants_container"]}>
          {plants?.map((plant: Plant) => {
            return (
              <div key={plant?.id}>
                <Image
                  width={250}
                  height={250}
                  src={plant?.img}
                  alt={plant?.title}
                ></Image>
                <p>{plant?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
