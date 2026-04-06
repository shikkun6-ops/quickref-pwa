import Link from "next/link";
import { notFound } from "next/navigation";
import { t } from "@/lib/locales";
import { isLang } from "@/lib/lang";
import styles from "./checkin.module.css";
import FixedNav from "../components/FixedNav";

type ChartRow = {
  kind: "P" | "S";
  label: string;
};

function renderChartRows(rows: ChartRow[]) {
  return rows.map((row, index) => {
    const prevKind = index > 0 ? rows[index - 1].kind : null;
    const isFirstOfGroup = row.kind !== prevKind;

    let rowSpan = 0;

    if (isFirstOfGroup) {
      rowSpan = rows.slice(index).filter((r) => r.kind === row.kind).length;
    }

    return (
      <tr key={`${row.kind}-${row.label}-${index}`}>
        {isFirstOfGroup && (
          <th
            className={`${styles.kindCell} ${
              row.kind === "P" ? styles.kindP : styles.kindS
            }`}
            rowSpan={rowSpan}
            scope="rowgroup"
          >
            {row.kind}
          </th>
        )}

        <td className={styles.itemCell}>{row.label}</td>
      </tr>
    );
  });
}

export default async function CheckinPage({
  params,
}: {
  params: { lang: string } | Promise<{ lang: string }>;
}) {
  const { lang } = await Promise.resolve(params);
  if (!isLang(lang)) notFound();

  const d = t(lang);

  const sections = [
    d.checkinSections.rate,
    d.checkinSections.spec,
    d.checkinSections.facilities,
  ];

  return (
    <main className={styles.container}>
      <section className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{d.checkinTitle}</h1>
        <p className={styles.pageLead}>{d.checkinLead}</p>
      </section>

      {sections.map((section, index) => (
        <section key={index} className={styles.infoSection}>
          <div className={styles.chartCol}>
            <div className={styles.chartCard}>
              {section.chartTitle && (
                <h2 className={styles.chartTitle}>{section.chartTitle}</h2>
              )}

              <div className={styles.chartWrap}>
                <table
                  className={styles.checkinChart}
                  aria-label={section.title}
                >
                  <tbody>{renderChartRows(section.chartRows)}</tbody>
                </table>
              </div>
            </div>
          </div>

          <div className={styles.textCol}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>

            <div className={styles.bodyBlock}>
              {section.body.map((line, i) => (
                <p key={i} className={styles.bodyText}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}
      <FixedNav lang={lang} />    
    </main>
  );
}