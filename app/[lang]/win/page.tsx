import { notFound } from "next/navigation";
import { t } from "@/lib/locales";
import { isLang } from "@/lib/lang";
import type { WinStep, WinImageStep, WinTableStep} from "@/lib/locales/types";
import { WinTable } from "../components/WinTable";
import FixedNav from "../components/FixedNav";

function ImageStepContent({ step }: { step: WinImageStep }) {
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
        {step.body.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </div>
  );
}

function TableStepContent({ step }: { step: WinTableStep }) {
  return (
    <div className="stepBodyOnly">
      <div className="stepBody">
        {step.body.map((text, i) => (
          <p key={i}>{text}</p>
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

function StepCard({ step, id }: { step: WinStep; id?: string }) {
  return (
    <article id={id} className="stepCard">
      <div className="stepHead">
        <span className="stepNo">{step.no}</span>
        <h2 className="stepTitle">{step.title}</h2>
      </div>

      {step.kind === "image" ? (
        <ImageStepContent step={step} />
      ) : (
        <TableStepContent step={step} />
      )}
    </article>
  );
}

export default async function WinPage({
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
        <div
          className="row"
          style={{ justifyContent: "space-between", alignItems: "baseline" }}
        >
          <h1 className="h1">{d.winTitle}</h1>
          <span className="badge">{lang}</span>
        </div>

        {d.winLead && <p className="lead">{d.winLead}</p>}

        <section className="stepsSection">
          {d.winSteps.map((step) => (
            <StepCard
              key={step.no}
              id={`step-${step.no}`}
              step={step}
            />
          ))}
        </section>
      </div>

      <FixedNav lang={lang} />
    </main>
  );
}