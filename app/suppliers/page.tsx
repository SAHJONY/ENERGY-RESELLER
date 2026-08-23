import { AppShell, PageHeader } from '../../components/shell';
import { suppliers } from '../../lib/data';

export default function Page() {
  return <AppShell><PageHeader eyebrow="Supplier Network" title="One routing layer across REPs and energy suppliers." description="Track markets, product eligibility, quote latency, API readiness, commercial terms and operational quality."/><div className="pagegrid">{suppliers.map(s => <div className="card" key={s.name}><div className="sectionhead"><h2>{s.name}</h2><span className="pill">Quality {s.quality}</span></div><p>{s.markets}</p><p>{s.products}</p><div className="delta">Quote latency {s.latency}</div></div>)}</div></AppShell>;
}
