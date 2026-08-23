import { AppShell, PageHeader } from '../../components/shell';
import { agents } from '../../lib/data';

export default function Page() {
  return <AppShell><PageHeader eyebrow="AI Workforce" title="Autonomy with scopes, evidence and approval boundaries." description="Each agent has a narrow job, observable output and explicit limits on consequential actions."/><div className="pagegrid">{agents.map(a => <div className="card" key={a.name}><div className="sectionhead"><h2>{a.name}</h2><span>{a.status}</span></div><p>{a.job}</p><div className="delta">{a.metric}</div></div>)}</div></AppShell>;
}
