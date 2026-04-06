import Link from "next/link";
import { notFound } from "next/navigation";
import { t } from "@/lib/locales";
import { isLang } from "@/lib/lang";
import type {ContentBlock,QuitStep,QuitImageStep,QuitTableStep,WinTableStep, WinStep,} from "@/lib/locales/types";
import { WinTable } from "../components/WinTable";
import FixedNav from "../components/FixedNav";

function ImageStepContent({ step }: { step: QuitImageStep }) {
  return (
    <div className="stepGrid">
      <figure className="stepFigure">
        <div className="imageWrapper">
          <img className="stepImg" src={step.imgSrc} alt={step.imgAlt} />

          {step.overlayItems?.map((item, i) => (
            <div
              key={i}
              className="overlay"
              style={{ top: item.y, left: item.x }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </figure>

      <div className="stepBody">
        {step.body.map((p, i) => (
          <p key={i} className="p">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

function TableStepContent({ step }: { step: QuitTableStep }) {
  return (
    <div className="stepBodyOnly">
      <div className="stepBody">
        {step.body.map((p, i) => (
          <p key={i} className="p">
            {p}
          </p>
        ))}
      </div>

      <div className="tableWrap">
        <table className="infoTable">
          <thead>
            <tr>
              {step.table.headers.map((header, i) => (
                <th key={i}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {step.table.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.cells.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell.text}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StepCard({ step }: { step: QuitStep }) {
  return (
    <article className="stepCard">
      <div className="stepHead">
        <span className="stepNo">{step.no}</span>
        <h3 className="stepTitle">{step.title}</h3>
      </div>

      {step.kind === "image" ? (
        <ImageStepContent step={step} />
      ) : (
        <TableStepContent step={step} />
      )}
    </article>
  );
}

function QuitIntro({
  lang,
  lead,
  body,
  winSteps,
}: {
  lang: string;
  lead: string;
  body: ContentBlock[];
  winSteps: WinStep[];
}) {

  const tableStep = winSteps.find(
    (s): s is WinTableStep => s.kind === "table" && s.no === 2
  );

  return (
    <section className="quitIntro">
      <h2 className="h2">{lead}</h2>

       {body.map((block, blockIndex) => {
       if (block.type !== "paragraph") return null;

        const inlineParts = block.parts.filter((part) => part.type !== "embed");
        const embedParts = block.parts.filter((part) => part.type === "embed");  

        return (
          <div key={blockIndex} className="quitIntroBlock">
            {inlineParts.length > 0 && (
              <p className="quitIntroText">
                {inlineParts.map((part, partIndex) => {
                  if (part.type === "text") {
                    return <span key={partIndex}>{part.text}</span>;
                  }

                  if (part.type === "link") {
                    if (part.external) {
                      return (
                        <a
                          key={partIndex}
                          href={part.targetId}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inlineJump"
                        >
                          {part.text}
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={partIndex}
                        href={`/${lang}/win#${part.targetId}`}
                        className="inlineJump"
                      >
                        {part.text}
                      </Link>
                    );
                  }

                  return null;
                })}
              </p>
            )}

            {embedParts.map((part, embedIndex) => {
              if (part.type !== "embed") return null;

              if (part.targetId === "/win#step-2") {
                return tableStep ? (
                  <div key={embedIndex} className="quitIntroEmbed">
                    <WinTable step={tableStep} />
                  </div>
                ) : null;
              }

              return null;
            })}
          </div>
        );
      })}
    </section>
  );
}

function QuitSection({
  id,
  title,
  lead,
  steps,
}: {
  id: "pachinko" | "pachislot" | "refund";
  title: string;
  lead?: string;
  steps: QuitStep[];
}) {
  return (
    <section id={id} className="quitSection">
      <h2 className="h2">{title}</h2>
      {lead ? <p className="p muted">{lead}</p> : null}


      <div className="stepStack">
        {steps.map((s) => (
          <StepCard key={`${id}-${s.no}`} step={s} />
        ))}
      </div>
    </section>
  );
}

export default async function QuitPage({
  params,
}: {
  params: { lang: string } | Promise<{ lang: string }>;
}) {
  const { lang } = await Promise.resolve(params);
  if (!isLang(lang)) notFound();

  const d = t(lang);

  return (
    <main className="container">
      <div className="card">
        <div className="row" 
             style={{ justifyContent: "space-between", 
             alignItems: "baseline" }}>
          <h1 className="h1">{d.quitTitle}</h1>
          <span className="badge">{lang}</span>
        </div>

        {/* 共通説明 */}
        <QuitIntro
          lang={lang}
          lead={d.quitIntroLead}
          body={d.quitIntroBody}
          winSteps={d.winSteps}
        />

        {/* ナビ */}
        <div className="quitTabs">
          <a href="#pachinko" className="quitTab">
            {d.quitPachinko.title}
          </a>
          <a href="#pachislot" className="quitTab">
            {d.quitPachislot.title}
          </a>
          <a href="#refund" className="quitTab">
            {d.quitRefund.title}
          </a>
        </div>
       
        {/* 前段 */}
        <QuitSection
          id="pachinko"
          title={d.quitPachinko.title}
          lead={d.quitPachinko.lead}
          steps={d.quitPachinko.steps}
        />

        {/* 後段 */}
        <QuitSection
          id="pachislot"
          title={d.quitPachislot.title}
          lead={d.quitPachislot.lead}
          steps={d.quitPachislot.steps}
        />

        {/* 返金 */}
        <QuitSection
          id="refund"
          title={d.quitRefund.title}
          lead={d.quitRefund.lead}
          steps={d.quitRefund.steps}
        />
      </div>
    <FixedNav lang={lang} />
    </main>
  );
}