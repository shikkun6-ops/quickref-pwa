"use client";

import { trackTroubleQuestionOpened, type AppLang } from "@/lib/analytics";
import styles from "./trouble.module.css";

type TroubleItem = {
  id: string;
  question: string;
};

type Props = {
  lang: AppLang;
  ariaLabel: string;
  items: TroubleItem[];
  questionLabel?: string;
};

export default function TroubleNav({
  lang,
  ariaLabel,
  items,
  questionLabel = "Q",
}: Props) {
  return (
    <nav className={styles.topicNav} aria-label={ariaLabel}>
      <ul className={styles.topicList}>
        {items.map((item, index) => (
          <li key={item.id} className={styles.topicItem}>
            <a
              href={`#${item.id}`}
              className={styles.topicLink}
              onClick={() =>
                trackTroubleQuestionOpened(lang, item.id, item.question)
              }
            >
              <span className={styles.topicQ}>
                {questionLabel} {index + 1}
              </span>
              <span className={styles.topicText}>{item.question}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}