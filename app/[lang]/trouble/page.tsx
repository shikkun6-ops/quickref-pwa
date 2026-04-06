import Link from "next/link";
import { notFound } from "next/navigation";
import { t } from "@/lib/locales";
import { isLang } from "@/lib/lang";
import styles from "./trouble.module.css";
import FixedNav from "../components/FixedNav";
import TroubleNav from "./TroubleNav";

export default async function TroublePage({
  params,
}: {
  params: { lang: string } | Promise<{ lang: string }>;
}) {
  const { lang } = await Promise.resolve(params);
  if (!isLang(lang)) notFound();

  const d = t(lang);
  const items = d.trouble.items;

  return (
    <main id="top" className={styles.container}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{d.trouble.title}</h1>

        <p className={styles.pageLead}>
          {d.trouble.leadParts.map((part, i) => {
            if (part.type === "text") {
             return <span key={i}>{part.text}</span>;
          }

            return (
             <a
                key={i}
                href={`#${part.targetId}`}
                className={styles.inlineJump}
             >
                {part.text}
            </a>
            );
          })}
        </p>

        <TroubleNav
        lang={lang}
        ariaLabel={d.trouble.navAriaLabel}
        questionLabel={d.trouble.questionLabel}
         items={d.trouble.items.map((item) => ({
         id: item.id,
         question: item.question,
        }))}
      />
      </header>

      {/* 回答一覧 */}
      <div className={styles.answerList}>
        {items.map((item) => (
          <section key={item.id} id={item.id} className={styles.answerSection}>
            <div className={styles.answerHeader}>
              <p className={styles.answerKicker}>{d.trouble.answerLabel}</p>
              <h2 className={styles.answerTitle}>{item.answerTitle}</h2>
            </div>

            {item.blocks.map((block, blockIndex) => {
              if (block.type === "paragraph") {
                return (
                  <p key={blockIndex} className={styles.paragraph}>
                    {block.parts.map((part, partIndex) => {
                      if (part.type === "text") {
                        return <span key={partIndex}>{part.text}</span>;
                      }
                      if (part.type === "link") {
                        if (part.external) {
                          return (
                          <Link
                            key={partIndex}
                            href={`/${lang}${part.targetId}`}
                            className={styles.inlineJump}
                          >
                           {part.text}
                          </Link>
                          );
                         }
                      return (
                        <a
                          key={partIndex}
                          href={`#${part.targetId}`}
                          className={styles.inlineJump}
                        >
                          {part.text}
                        </a>
                      );
                    }
                      return null;
                    })}
                  </p>
                );
              }

              if (block.type === "note") {
                return (
                  <div
                    key={blockIndex}
                    id={block.id}
                    className={styles.noteBox}
                  >
                    <p className={styles.noteTitle}>{block.title}</p>
                    <p className={styles.noteText}>{block.text}</p>
                  </div>
                );
              }

              if (block.type === "image") {
                return (
                  <figure
                    key={blockIndex}
                     id={block.id}
                    className={styles.figure}
                 >
                 <div className={styles.imageFrame}>
        <img
          src={block.src}
          alt={block.alt}
          className={styles.image}
        />

        {block.overlayItems?.map((item, i) => (
          <div
            key={i}
            className={styles.overlay}
            style={{ top: item.y, left: item.x }}
          >
            {item.label}
          </div>
        ))}
                </div>

                     {block.caption ? (
                     <figcaption className={styles.caption}>
                     {block.caption}
                    </figcaption>
                 ) : null}
                </figure>
                );
                }

              if (block.type === "steps") {
                return (
                  <ol key={blockIndex} className={styles.stepList}>
                    {block.items.map((step, stepIndex) => (
                      <li key={stepIndex} className={styles.stepItem}>
                        <span className={styles.stepNo}>{step.no}</span>
                        <div className={styles.stepBody}>
                          <p className={styles.stepTitle}>{step.title}</p>
                          <p className={styles.stepText}>{step.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                );
              }

              return null;
            })}

            <div className={styles.sectionFooter}>
              <a href="#top" className={styles.backToTop}>
                {d.trouble.backToTop}
              </a>
            </div>
          </section>
        ))}
      </div>
      <FixedNav lang={lang} />
    </main>
  );
}