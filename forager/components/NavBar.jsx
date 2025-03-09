"use client";

import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';
import { TbMushroom } from "react-icons/tb";
import styles from '../styles/NavBar.module.css'; // Import the styles for the NavBar
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathName = usePathname();

  return (
    <div className={styles.navbar}>
      <Link href="/mushroom" passHref>
        <div className={ `${styles.navItem} ${pathName === "/mushroom" ? styles.active : ""}` }>
          <TbMushroom />
        </div>
      </Link>
      <Link href="/dashboard" passHref>
        <div className={ `${styles.navItem} ${pathName === "/dashboard" ? styles.active : ''}` }>
          <FaHome />
        </div>
      </Link>
      <Link href="/photosearch" passHref>
        <div className={`${styles.navItem} ${pathName === "/photosearch" ? styles.active : ''}`}>
          <FaSearch />
        </div>
      </Link>
    </div>
  );
}
