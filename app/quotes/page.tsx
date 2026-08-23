import { AppShell, PageHeader } from '../../components/shell';

const offers = [
  ['Fixed 24', 'Supplier Alpha', '$0.0712/kWh', '$38,400', '92'],
  ['Green Fixed 36', 'Supplier Terra', '$0.0738/kWh', '$43,800', '89'],
  ['Block + Index', 'Supplier Vector', 'Market + $0.0041', '$51,600', '84'],
];

export default function Page() {
  return <AppShell><PageHeader eyebrow="Quote Engine" title="Normalize supplier pricing into comparable economics." description="Rank offers by customer cost, term, margin, product risk, renewable content and executable evidence."/><div className="card"><div className="tablewrap"><table className="table"><thead><tr><th>Product</th><th>Supplier</th><th>Price</th><th>Expected gross</th><th>Fit score</th></tr></thead><tbody>{offers.map(r => <tr key={r[0]}>{r.map((v,i) => <td key={`${r[0]}-${i}`}>{i===0?<b>{v}</b>:v}</td>)}</tr>)}</tbody></table></div></div></AppShell>;
}
