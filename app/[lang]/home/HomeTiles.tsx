"use client";

import Link from "next/link";
import type {AppLang } from "@/lib/analytics";
import { trackMenuItemClicked } from "@/lib/analytics";

type MenuItem =
  | "checkin"
  | "play"
  | "quit"
  | "win"
  | "trouble"
  | "gameflow";

export function HomeTiles({
  lang,
  tiles,
}: {
  lang: string;
  tiles: {
    href: string;
    src: string;
    label: string;
  }[];
}) {
  return (
    <div className="homeGrid">
      {tiles.map((tile) => {
        const menuItem = tile.href.split("/")[2] as MenuItem;

        return (
          <Link
            key={tile.href}
            href={tile.href}
            className="homeTile"
            onClick={() =>
              trackMenuItemClicked(lang as AppLang , menuItem, tile.href,"home")
            }
          >
            <div className="homeTileImageWrap">
              <img src={tile.src} alt={tile.label} className="homeTileImage" />
            </div>

            <div className="homeTileBody">
              <span className="homeTileLabel">{tile.label}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}