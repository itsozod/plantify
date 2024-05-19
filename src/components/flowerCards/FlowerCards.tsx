import React from "react";
import styles from "./FlowerCards.module.css";
import Image from "next/image";
import Flower1 from "..//../assets/images/image 1.png";
import Flower2 from "..//../assets/images/image 2.png";
import Flower3 from "../../assets/images/image 3.png";
export const FlowerCards = () => {
  return (
    <div className={styles["flower_container"]}>
      <div className={styles["content"]}>
        <div className={styles["card"]}>
          <div>
            <h1>Happiness</h1>
            <h1>blooms from</h1>
            <h1>within</h1>
          </div>
          <p>
            Our environment, the world in which we live and work, is a mirror of
            our attitudes and expectations.
          </p>
          <div className={styles["btn_container"]}>
            <button className={styles["shop_btn"]}>Shop now</button>
            <button className={styles["explore_btn"]}>Explore more</button>
          </div>
        </div>
        <div className={styles["flower_card"]}>
          <Image
            className={styles["flower_card_1"]}
            // width={200} height={200}
            src={Flower3}
            alt="Image"
          />
          <Image
            className={styles["flower_card_2"]}
            // width={200} height={200}
            src={Flower2}
            alt="Image"
          />
          
          <Image
            className={styles["flower_card_3"]}
            // width={500}
            // height={900}
            src={Flower1}
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};
