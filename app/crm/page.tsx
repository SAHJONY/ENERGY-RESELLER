import { AppShell, PageHeader } from '../../components/shell';
import { pipeline } from '../../lib/data';

export default function Page() {
  return <AppShell><PageHeader eyebrow="Revenue CRM" title="Every account, meter and renewal in one revenue graph." description="Prioritize opportunities by load, timing, market fit, expected gross and policy readiness."/><div className="card"><div className="tablewrap"><table className="table"><thead><tr><th>Account</th><th>Market</th><th>Load</th><th>Stage</th><th>Expected value</th><th>AI score</th></tr></thead><tbody>{pipeline.map(r => <tr key={r.account}><td><b>{r.account}</b></td><td>{r.market}</td><td>{r.load}</td><td><span className="pill">{r.stage}</span></td><td>{r.value}</td><td className="score">{r.score}</td></tr>)}</tbody></table></div></div></AppShell>;
}
