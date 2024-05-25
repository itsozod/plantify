import Image from "next/image";
import styles from "./Featured.module.css";

interface Plant {
  id: number;
  title: string;
  img: string;
}

const getPlants = async () => {
  try {
    const res = await fetch("http://localhost:3001/plants");
    const data = await res.json();
    return data;
  } catch (e: any) {
    console.log(e.message);
  }
};

export const Featured = async () => {
  const plants: Plant[] = await getPlants();
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
          {plants?.length === 0 && <div>Error fetching data</div>}
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
