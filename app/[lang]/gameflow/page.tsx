import { notFound } from "next/navigation";
import { t } from "@/lib/locales";
import { isLang } from "@/lib/lang";
import type {GameflowStep} from "@/lib/locales/types";
import FixedNav from "../components/FixedNav";

function StepCard({ step }: { step: GameflowStep }) {
  return (
    <article className="stepCard">
      <div className="stepHead">
        <span className="stepNo">{step.no}</span>
        <h3 className="stepTitle">{step.title}</h3>
      </div>

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
    </article>
  );
}

function GameflowSection({
  id,
  title,
  lead,
  steps,
}: {
  id: "pachinko" | "pachislot";
  title: string;
  lead?: string;
  steps: GameflowStep[];
}) {
  return (
    <section id={id} className="gameflowSection">
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

export default async function GameflowPage({
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
          <h1 className="h1">{d.gameflowTitle}</h1>
          <span className="badge">{lang}</span>
        </div>

        {/* ナビ */}
        <div className="playTabs">
          <a href="#pachinko" className="playTab">
            {d.gameflowPachinko.title}
          </a>
          <a href="#pachislot" className="playTab">
            {d.gameflowPachislot.title}
          </a>
        </div>
       
        {/* 前段 */}
        <GameflowSection
          id="pachinko"
          title={d.gameflowPachinko.title}
          lead={d.gameflowPachinko.lead}
          steps={d.gameflowPachinko.steps}
        />

        {/* 後段 */}
        <GameflowSection
          id="pachislot"
          title={d.gameflowPachislot.title}
          lead={d.gameflowPachislot.lead}
          steps={d.gameflowPachislot.steps}
        />
      </div>
    <FixedNav lang={lang} />
    </main>
  );
}