import { AppShell, PageHeader } from '../../components/shell';

const counterparties = [
  ['SEPLAT ENERGY PLC','Seller research lead','Nigeria','HIGH'],
  ['SAHARA ENERGY RESOURCES LIMITED','Seller research lead','Nigeria','HIGH'],
  ['ARADEL HOLDINGS PLC','Seller research lead','Nigeria','HIGH'],
  ['COSMO OIL CO., LTD.','Buyer research lead','Japan','TOP PRIORITY'],
  ['IDEMITSU KOSAN CO., LTD.','Buyer research lead','Japan','TOP PRIORITY'],
  ['ENEOS HOLDINGS, INC.','Buyer research lead','Japan','TOP PRIORITY'],
];

const gates = [
  ['01','Counterparty KYB','Verify legal entity, ownership/control, sanctions exposure and business authority.'],
  ['02','Mandate / Authority','Seller must prove authority/title/mandate; buyer must prove authorized purchasing role.'],
  ['03','Product & Volume','Crude grade, origin, specification, quantity, delivery basis and schedule must be explicit.'],
  ['04','Commercial Evidence','Real buyer demand, seller availability, pricing basis and payment structure must be evidenced.'],
  ['05','Transaction Readiness','Only then prepare formal quote, SPA/ICPO workflow, logistics and closing package.'],
];

export default function CrudeOilBusiness() {
  return (
    <AppShell>
      <PageHeader eyebrow="SAHJONY ENERGY · Energy Department" title="Crude Oil Brokerage" description="Dedicated business line for governed crude-oil brokerage, counterparty qualification, mandate verification, buyer qualification, pricing intelligence, compliance and transaction readiness." />

      <div className="grid4">
        <div className="card"><div className="klabel">Business Line</div><div className="kvalue">Crude Oil</div><div className="delta">Inside Energy Department</div></div>
        <div className="card"><div className="klabel">Companies</div><div className="kvalue">86</div><div className="delta">Snapshot records</div></div>
        <div className="card"><div className="klabel">Sellers</div><div className="kvalue">36</div><div className="delta">Research leads</div></div>
        <div className="card"><div className="klabel">Buyers</div><div className="kvalue">50</div><div className="delta">Research leads</div></div>
      </div>

      <div className="section split">
        <div className="card">
          <div className="sectionhead"><h2>Priority counterparties</h2><span>Research status only</span></div>
          <div className="tablewrap"><table className="table"><thead><tr><th>Company</th><th>Role</th><th>Country</th><th>Priority</th></tr></thead><tbody>{counterparties.map(([name,role,country,priority]) => <tr key={name}><td><b>{name}</b></td><td>{role}</td><td>{country}</td><td><span className="pill">{priority}</span></td></tr>)}</tbody></table></div>
        </div>
        <div className="card">
          <div className="sectionhead"><h2>Operating policy</h2><span>Fail-closed</span></div>
          <p>No company is promoted to transaction-ready merely because it is public, known, or previously listed as verified. Evidence must support mandate, demand, authority and compliance.</p>
          <p><b>Default capital posture:</b> no SAHJONY inventory purchase or principal exposure without explicit Chairman approval.</p>
          <p><b>Default economics:</b> brokerage/commission or protected margin structure, with counterparties and economics documented before disclosure or commitment.</p>
        </div>
      </div>

      <div className="section card">
        <div className="sectionhead"><h2>Crude Oil Deal Gates</h2><span>Research lead → transaction-ready</span></div>
        <div className="flow">{gates.map(([n,t,d]) => <div className="step" key={n}><em>{n}</em><strong>{t}</strong><span>{d}</span></div>)}</div>
      </div>

      <div className="banner"><div><b>Energy Department placement complete</b><p>Crude Oil Brokerage is treated as a first-class business line within SAHJONY ENERGY, sharing CRM, quote, supplier, compliance, AI workforce and Owner OS controls.</p></div><span className="pill gold">Energy Department</span></div>
    </AppShell>
  );
}
