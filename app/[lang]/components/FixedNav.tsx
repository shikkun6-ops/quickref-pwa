"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/lib/lang";
import { t } from "@/lib/locales";
import styles from "./FixedNav.module.css";
import {
  trackFixedNavClicked,
  type AppLang,
  type FixedNavItem,
} from "@/lib/analytics";

type Props = {
  lang: Lang;
};

type NavItem = {
  key: FixedNavItem;
  href: string;
  label: string;
  iconSrc: string;
};

export default function FixedNav({ lang }: Props) {
  const pathname = usePathname();
  const d = t(lang);

  const items: NavItem[] = [
    {
      key: "home",
      href: `/${lang}/home`,
      label: d.navHome ?? "Home",
      iconSrc: "/icons/menu3.png",
    },
    {
      key: "play",
      href: `/${lang}/play`,
      label: d.navPlay ?? "Play",
      iconSrc: "/icons/play3.png",
    },
    {
      key: "quit",
      href: `/${lang}/quit`,
      label: d.navQuit ?? "Quit",
      iconSrc: "/icons/quit3.png",
    },
    {
      key: "win",
      href: `/${lang}/win`,
      label: d.navWin ?? "Win",
      iconSrc: "/icons/win3.png",
    },
    {
      key: "trouble",
      href: `/${lang}/trouble`,
      label: d.navTrouble ?? "Trouble",
      iconSrc: "/icons/help3.png",
    },
  ];

  return (
    <>
      <nav className={styles.fixedNav} aria-label="Fixed navigation">
        <div className={styles.navInner}>
          {items.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(item.href.split("#")[0]);

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                onClick={() =>
                  trackFixedNavClicked(
                    lang as AppLang,
                    item.key,
                    item.href,
                    pathname
                  )
                }
              >
                <span className={styles.icon}>
                  <img src={item.iconSrc} alt={item.label} />
                </span>
                <span className={styles.label}>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
      <div className={styles.navSpacer} />
    </>
  );
}