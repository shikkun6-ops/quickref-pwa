"use client";

import Link from "next/link";
import { LANGS } from "@/lib/lang";
import { trackLanguageSelected } from "@/lib/analytics";

export default function LanguageSelectPage() {
  return (
    <main className="container">
      <div className="card">
        <h1 className="h1">
          言語を選択してください / Choose your language
        </h1>
        <p className="p">
          选择语言 / 언어를 선택하세요
        </p>

        <div className="hr" />

        <div className="grid">
          {LANGS.map((l) => (
            <Link
              key={l.code}
              className="btn btnPrimary"
              href={`/${l.code}/start`}
              prefetch={false}
              onClick={() => trackLanguageSelected(l.code)}
            >
              {l.label}
              <span className="badge">{l.code}</span>
            </Link>
          ))}
        </div>

        <div className="hr" />
      </div>
    </main>
  );
}