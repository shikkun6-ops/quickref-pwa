import Link from "next/link";
import type { Lang } from "@/lib/lang";

type Props = {
  lang: Lang;
  title: string;
  desc?: string;
  imageSrc?: string; // "/pages/help-hero.png" など（public配下）
  imageAlt?: string;
  children?: React.ReactNode; // 追加テキストや箇条書きなど
};

export default function InfoPage({
  lang,
  title,
  desc,
  imageSrc,
  imageAlt = "",
  children,
}: Props) {
  return (
    <main className="container">
      <div className="card">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <h1 className="h1">{title}</h1>
          <span className="badge">{lang}</span>
        </div>

        {desc ? <p className="p">{desc}</p> : null}

        {imageSrc ? (
          <>
            <div className="hr" />
            <img className="pageImg" src={imageSrc} alt={imageAlt} />
          </>
        ) : null}

        {children ? (
          <>
            <div className="hr" />
            <div className="pageBody">{children}</div>
          </>
        ) : null}

        <div className="hr" />

        <div className="row">
          <Link className="btn" href={`/${lang}/home`} prefetch={false}>
            Homeへ戻る
          </Link>
          <Link className="btn" href={`/${lang}/start`} prefetch={false}>
            Noticeへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
