import type { WinTableStep } from "@/lib/locales/types";

export function WinTable({ step }: { step: WinTableStep }) {
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