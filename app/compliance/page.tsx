import { AppShell, PageHeader } from '../../components/shell';

const gates = [
  ['Market authority', 'REVIEW'],
  ['Customer consent / LOA', 'BLOCKED UNTIL EVIDENCE'],
  ['Supplier appointment', 'REVIEW'],
  ['Pricing provenance', 'PASS REQUIRED'],
  ['Disclosure package', 'PASS REQUIRED'],
  ['Enrollment authorization', 'HUMAN / CUSTOMER'],
];

export default function Page() {
  return <AppShell><PageHeader eyebrow="Compliance Sentinel" title="No authority, no enrollment." description="Jurisdiction, consent, supplier appointment, pricing provenance and customer authorization are treated as hard production gates."/><div className="pagegrid">{gates.map(([g,s]) => <div className="card" key={g}><div className="klabel">Policy gate</div><div className="kvalue" style={{fontSize:18}}>{g}</div><span className="pill gold">{s}</span></div>)}</div></AppShell>;
}
