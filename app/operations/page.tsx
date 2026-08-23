import { AppShell, PageHeader } from '../../components/shell';

const steps = [
  ['Usage authorization', 'Required'],
  ['Pricing evidence', 'Required'],
  ['Compliance decision', 'Required'],
  ['Customer signature', 'Human/customer'],
  ['Supplier enrollment', 'Provider-controlled'],
  ['Switch confirmation', 'Utility/provider evidence'],
];

export default function Page() {
  return <AppShell><PageHeader eyebrow="Enrollment Operations" title="Move deals forward only when evidence is complete." description="The control plane is designed to stop enrollment when authorization, pricing, disclosures or jurisdictional requirements are missing."/><div className="pagegrid">{steps.map(([a,b]) => <div className="card" key={a}><div className="klabel">{b}</div><div className="kvalue" style={{fontSize:20}}>{a}</div><span className="pill gold">Hard gate</span></div>)}</div></AppShell>;
}
