import React, { Suspense } from "react";
import styles from "./Content.Layout.module.css";
import { FlowerCards } from "@/components/flowerCards/FlowerCards";
import { Featured } from "@/components/Featured/Featured";

export const Content = () => {
  return (
    <div className={styles["content_layout"]}>
      <FlowerCards />
      <Suspense fallback={<div>Loading...</div>}>
        <Featured />
      </Suspense>
    </div>
  );
};
