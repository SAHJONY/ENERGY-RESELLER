import Link from 'next/link';
import { Bot, Gauge, LayoutDashboard, Network, ShieldCheck, TrendingUp, Users, Zap } from 'lucide-react';

const nav = [
  ['/', 'Command Center', LayoutDashboard],
  ['/crm', 'Revenue CRM', Users],
  ['/quotes', 'Quote Engine', TrendingUp],
  ['/suppliers', 'Supplier Network', Network],
  ['/operations', 'Enrollment Ops', Zap],
  ['/agents', 'AI Workforce', Bot],
  ['/compliance', 'Compliance', ShieldCheck],
  ['/owner', 'Owner OS', Gauge],
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <aside className="side">
        <div className="brand">
          <div className="mark">ER</div>
          <div><b>SAHJONY ENERGY</b><small>Autonomous Reseller OS</small></div>
        </div>
        <nav className="nav">
          {nav.map(([href, label, Icon]) => <Link key={href} href={href}><Icon size={16}/>{label}</Link>)}
        </nav>
        <div className="sidefoot">
          <div><span className="dot"/>Control plane online</div>
          <div style={{ marginTop: 7 }}>Mode: governed · fail-closed</div>
        </div>
      </aside>
      <main className="main">{children}</main>
    </div>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="top">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p style={{ maxWidth: 800, margin: 0 }}>{description}</p>
      </div>
    </div>
  );
}
