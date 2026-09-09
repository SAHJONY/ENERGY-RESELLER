import { Sparkles } from 'lucide-react';
import { AppShell, PageHeader } from '../components/shell';
import { agents, kpis, pipeline } from '../lib/data';

const crudeOilSnapshot = {
  companies: 86,
  sellers: 36,
  buyers: 50,
  displayedOilPrice: '$85.42/bbl',
  displayedMove: '+2.1% today',
};

const crudeContacts = [
  ['SEPLAT ENERGY PLC','Nigeria','Independent Oil & Gas Producer','HIGH'],
  ['SAHARA ENERGY RESOURCES LIMITED','Nigeria','Integrated Energy Company','HIGH'],
  ['ARADEL HOLDINGS PLC','Nigeria','Integrated Indigenous Energy Company','HIGH'],
  ['COSMO OIL CO., LTD.','Japan','Major Japanese refiner, publicly listed','TOP PRIORITY'],
  ['IDEMITSU KOSAN CO., LTD.','Japan','Major integrated oil company','TOP PRIORITY'],
  ['ENEOS HOLDINGS, INC.','Japan',"Japan's largest oil refiner",'TOP PRIORITY'],
];

export default function Home() {
  return (
    <AppShell>
      <PageHeader eyebrow="SAHJONY ENERGY | Business Command Center" title="Energy brokerage and commercial operations in one governed operating system." description="Commercial energy load, crude-oil brokerage, counterparties, sourcing, qualification, pricing, compliance, outreach and transaction readiness — with evidence gates before any binding action."/>

      <div className="section card">
        <div className="sectionhead"><h2>Crude Oil Brokerage</h2><span>Imported command-center snapshot · verify live market data before use</span></div>
        <div className="grid4">
          <div><div className="klabel">Total Companies</div><div className="kvalue">{crudeOilSnapshot.companies}</div><div className="delta">Database snapshot</div></div>
          <div><div className="klabel">Sellers</div><div className="kvalue">{crudeOilSnapshot.sellers}</div><div className="delta">Counterparty records</div></div>
          <div><div className="klabel">Buyers</div><div className="kvalue">{crudeOilSnapshot.buyers}</div><div className="delta">Counterparty records</div></div>
          <div><div className="klabel">Displayed Oil Price</div><div className="kvalue">{crudeOilSnapshot.displayedOilPrice}</div><div className="delta">{crudeOilSnapshot.displayedMove} · snapshot, not a live feed</div></div>
        </div>
        <div className="tablewrap" style={{marginTop:18}}><table className="table"><thead><tr><th>Priority Counterparty</th><th>Country</th><th>Role</th><th>Priority</th><th>Operational status</th></tr></thead><tbody>{crudeContacts.map(([name,country,role,priority]) => <tr key={name}><td><b>{name}</b></td><td>{country}</td><td>{role}</td><td><span className="pill">{priority}</span></td><td>Research lead · KYB / authority / mandate required</td></tr>)}</tbody></table></div>
        <div className="banner" style={{marginTop:18}}><div><b>Brokerage truth gate</b><p>Company discovery or public verification does not prove a seller mandate, title to product, allocation, buyer demand, proof of funds, authority, sanctions clearance or a transaction-ready opportunity. Those gates remain separate.</p></div><span className="pill gold">No invented deals</span></div>
      </div>

      <div className="grid4">{kpis.map(k => <div className="card" key={k.label}><div className="klabel">{k.label}</div><div className="kvalue">{k.value}</div><div className="delta">{k.delta}</div></div>)}</div>
      <div className="section split">
        <div className="card"><div className="sectionhead"><h2>Highest-value opportunities</h2><span>Illustrative seed data</span></div><div className="tablewrap"><table className="table"><thead><tr><th>Account</th><th>Market</th><th>Load</th><th>Stage</th><th>Value</th><th>Score</th></tr></thead><tbody>{pipeline.map(r => <tr key={r.account}><td><b>{r.account}</b></td><td>{r.market}</td><td>{r.load}</td><td><span className="pill">{r.stage}</span></td><td>{r.value}</td><td className="score">{r.score}</td></tr>)}</tbody></table></div></div>
        <div className="card"><div className="sectionhead"><h2>Agent workforce</h2><span>8 governed agents</span></div>{agents.slice(0,5).map(a => <div className="agent" key={a.name}><div><b>{a.name}</b><p>{a.job}</p></div><small>{a.status}</small></div>)}</div>
      </div>
      <div className="section card"><div className="sectionhead"><h2>Autonomous deal flow</h2><span>Policy gates before binding actions</span></div><div className="flow">{[['01','Signal','Find evidence-grounded commercial accounts and counterparties'],['02','Qualify','Demand, authority, product, volume, destination and timing'],['03','Price','Normalize supplier terms, logistics, landed economics and margin'],['04','Govern','KYB, sanctions, authority, consent and product policy'],['05','Transact','Prepare controlled quote / contract / fulfillment evidence']].map(([n,t,d]) => <div className="step" key={n}><em>{n}</em><strong>{t}</strong><span>{d}</span></div>)}</div></div>
      <div className="banner"><div><b><Sparkles size={15} style={{verticalAlign:'-2px',marginRight:7}}/>AI accelerates operations without bypassing authority.</b><p>Signatures, payments, contractual commitments, title/mandate representations and regulated communications remain permissioned and auditable.</p></div><span className="pill gold">Fail-closed governance</span></div>
    </AppShell>
  );
}
