import React from "react";
import styles from "./Content.Layout.module.css";
import { FlowerCards } from "@/components/flowerCards/FlowerCards";
import { Featured } from "@/components/Featured/Featured";

export const Content = () => {
  return (
    <div className={styles["content_layout"]}>
      <FlowerCards />
      <Featured />
    </div>
  );
};
