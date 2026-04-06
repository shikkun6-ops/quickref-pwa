import Link from "next/link";
import { notFound } from "next/navigation";
import { t } from "@/lib/locales";
import { isLang } from "@/lib/lang";
import { HomeTiles } from "./HomeTiles";

export default async function HomePage({
  params,
}: {
  params: { lang: string } | Promise<{ lang: string }>;
}) {
  const { lang } = await Promise.resolve(params);

  if (!isLang(lang)) {
    notFound();
  }

  const d = t(lang);

  const tiles = [
    {
      href: `/${lang}/checkin`,
      src: "/icons/choose.png",
      label: d.homeTiles.checkin,
    },
    {
      href: `/${lang}/play`,
      src: "/icons/play.png",
      label: d.homeTiles.start,
    },
    {
      href: `/${lang}/quit`,
      src: "/icons/quit.png",
      label: d.homeTiles.quit,
    },
    {
      href: `/${lang}/win`,
      src: "/icons/win.png",
      label: d.homeTiles.win,
    },
    {
      href: `/${lang}/trouble`,
      src: "/icons/help.png",
      label: d.homeTiles.trouble,
    },
    {
      href: `/${lang}/gameflow`,
      src: "/icons/tips.png",
      label: d.homeTiles.gameflow,
    },
  ];

  return (
    <main className="container">
      <div className="card">
        <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
          <div>
        <h1 className="h1">{d.homeTitle}</h1>
        <p className="muted">{d.homeLead}</p>
          </div>
        </div>

        <hr className="sectionLine" />

        <HomeTiles lang={lang} tiles={tiles} />

        <hr className="sectionLine" />

        <div className="row" style={{ gap: "14px", flexWrap: "wrap" }}>
          <Link href={`/${lang}/start`} className="navButton">
            {d.homeTiles.backLabel}
          </Link>

          <Link href="/" className="navButton">
            {d.homeTiles.languageSelectLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}