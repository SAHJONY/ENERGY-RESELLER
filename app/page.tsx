import { Sparkles } from 'lucide-react';
import { AppShell, PageHeader } from '../components/shell';
import { agents, kpis, pipeline } from '../lib/data';

export default function Home() {
  return (
    <AppShell>
      <PageHeader eyebrow="Autonomous commercial energy command center" title="Turn energy load into governed recurring revenue." description="Discover load, qualify opportunities, normalize supplier offers, prepare proposals, control compliance, orchestrate enrollment and reconcile commissions in one operating system."/>
      <div className="grid4">{kpis.map(k => <div className="card" key={k.label}><div className="klabel">{k.label}</div><div className="kvalue">{k.value}</div><div className="delta">{k.delta}</div></div>)}</div>
      <div className="section split">
        <div className="card"><div className="sectionhead"><h2>Highest-value opportunities</h2><span>Illustrative seed data</span></div><div className="tablewrap"><table className="table"><thead><tr><th>Account</th><th>Market</th><th>Load</th><th>Stage</th><th>Value</th><th>Score</th></tr></thead><tbody>{pipeline.map(r => <tr key={r.account}><td><b>{r.account}</b></td><td>{r.market}</td><td>{r.load}</td><td><span className="pill">{r.stage}</span></td><td>{r.value}</td><td className="score">{r.score}</td></tr>)}</tbody></table></div></div>
        <div className="card"><div className="sectionhead"><h2>Agent workforce</h2><span>8 governed agents</span></div>{agents.slice(0,5).map(a => <div className="agent" key={a.name}><div><b>{a.name}</b><p>{a.job}</p></div><small>{a.status}</small></div>)}</div>
      </div>
      <div className="section card"><div className="sectionhead"><h2>Autonomous deal flow</h2><span>Policy gates before binding actions</span></div><div className="flow">{[['01','Signal','Find commercial accounts with switchable load'],['02','Qualify','Usage + market + timing scoring'],['03','Price','Normalize supplier terms and margin'],['04','Govern','Authority, consent, disclosures and product policy'],['05','Enroll','Prepare controlled enrollment evidence']].map(([n,t,d]) => <div className="step" key={n}><em>{n}</em><strong>{t}</strong><span>{d}</span></div>)}</div></div>
      <div className="banner"><div><b><Sparkles size={15} style={{verticalAlign:'-2px',marginRight:7}}/>AI accelerates operations without bypassing authority.</b><p>Signatures, switches, payments, contractual commitments and regulated communications remain permissioned and auditable.</p></div><span className="pill gold">Fail-closed governance</span></div>
    </AppShell>
  );
}
