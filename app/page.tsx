"use client";

import Link from "next/link";
import { LANGS } from "@/lib/lang";
import { trackLanguageSelected } from "@/lib/analytics";

export default function LanguageSelectPage() {
  return (
    <main className="langLanding">
      <section className="langHero">
        <div className="langHeroInner">
          <div className="langLogoMark" aria-hidden="true">
            <span className="langLogoDot langLogoDot1" />
            <span className="langLogoDot langLogoDot2" />
            <span className="langLogoDot langLogoDot3" />
          </div>

          <p className="langEyebrow">Multilingual Beginner Guide</p>

          <h1 className="langTitle">
            Pachinko &amp; Pachislot
            <br />
            Quick Guide
          </h1>

          <p className="langCatch">
            Play with confidence.
          </p>

          <p className="langLead">
            A multilingual guide for first-time players in Japan.
            Learn the basics, understand the rules, and enjoy the experience
            with less confusion.
          </p>

          <p className="langLeadJa">
            パチンコ・パチスロを初めて体験する人のための
            多言語クイックガイドです。
          </p>
        </div>
      </section>

      <section className="langSelectSection">
        <div className="langSelectCard">
          <h2 className="langSelectTitle">
            Select your language
          </h2>

          <p className="langSelectSub">
            言語を選択してください / 选择语言 / 언어를 선택하세요
          </p>

          <div className="langButtonGrid">
            {LANGS.map((l) => (
              <Link
                key={l.code}
                className="langButton"
                href={`/${l.code}/start`}
                prefetch={false}
                onClick={() => trackLanguageSelected(l.code)}
              >
                <span className="langButtonLabel">{l.label}</span>
                <span className="langButtonCode">{l.code}</span>
              </Link>
            ))}
          </div>

          <div className="langInfo">
            <p>
              This guide explains check-in, how to play, how to stop, how to
              exchange prizes, and common trouble cases.
            </p>
          </div>
        </div>
      </section>

      <footer className="langFooter">
        <p className="langFooterTitle">Quick Reference PWA</p>
        <p className="langFooterCopy">
          © 2026 Quick Reference PWA. All rights reserved.
        </p>
      </footer>
    </main>
  );
}