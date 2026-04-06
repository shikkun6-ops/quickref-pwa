import Link from "next/link";
import { t } from "@/lib/locales";
import { isLang } from "@/lib/lang";
import { notFound } from "next/navigation";

export default async function StartPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params; 

    if (!isLang(lang)) {
    notFound();
  }

  const d = t(lang);

  return (
    <main className="container">
      <div className="card">
        {/* Header */}
        <div className="row" style={{ justifyContent: "space-between" }}>
          <h1 className="h1">{d.noticeTitle}</h1>
          <span className="badge">{lang}</span>
        </div>

        {/* Notice icons */}
        <div className="noticeGrid">
          {d.noticeItems.map((n) => (
            <div key={n.src} className="noticeItem">
              <img src={n.src} alt={n.label} />
              <span>{n.label}</span>
            </div>
          ))}
        </div>

        <div className="hr" />

        {/* Action buttons */}
        <div className="grid">
          <Link
            className="btn btnPrimary"
            href={`/${lang}/home`}
            prefetch={false}
          >
            {d.understandAndStart}
          </Link>

          <Link className="btn" href={`/`} prefetch={false}>
            {d.goBack}
          </Link>
        </div>
      </div>
    </main>
  );
}
