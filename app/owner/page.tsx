import { AppShell, PageHeader } from '../../components/shell';

const readiness = [
  ['Database persistence', 'PENDING CONFIG'],
  ['Owner MFA / RBAC', 'PENDING CONFIG'],
  ['Supplier production access', 'PENDING'],
  ['Utility data authorization', 'PENDING'],
  ['E-sign / contract controls', 'PENDING'],
  ['Commission reconciliation', 'MODEL READY'],
  ['Audit logging', 'MODEL READY'],
  ['Live enrollment', 'GATED'],
];

export default function Page() {
  return <AppShell><PageHeader eyebrow="Private Owner OS" title="Know exactly what is live, gated and producing revenue." description="Production readiness remains explicit. The platform must never present demo data or unverified provider access as live business capability."/><div className="pagegrid">{readiness.map(([g,s]) => <div className="card" key={g}><div className="klabel">{g}</div><div className="kvalue" style={{fontSize:17}}>{s}</div></div>)}</div></AppShell>;
}
