import React from "react";
import styles from "./Header.Layout.module.css";
import { PlantifyLogo } from "@/assets/icons/plantifyLogo";
import { IconSearch } from "@/assets/icons/iconSearch";
import { IconUser } from "@/assets/icons/iconUser";
import { IconCart } from "@/assets/icons/iconCart";

export const Header = () => {
  return (
    <header className={styles["header_layout"]}>
      <div className={styles["header_layout_container"]}>
        <nav className={styles["nav_container"]}>
          <ul
            style={{
              display: "flex",
              gap: "25px",
            }}
          >
            <li className={styles["header_list"]}>Shop</li>
            <li className={styles["header_list"]}>Products</li>
            <li className={styles["header_list"]}>Fertilizer</li>
            <li className={styles["header_list"]}>Guide</li>
          </ul>
          <div>
            <PlantifyLogo />
          </div>
        </nav>
        <div className={styles["icons_container"]}>
          <IconSearch />
          <IconUser />
          <IconCart />
        </div>
      </div>
    </header>
  );
};
