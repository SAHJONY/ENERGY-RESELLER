export const kpis = [
  { label: 'Pipeline value', value: '$4.82M', delta: '+18.4%' },
  { label: 'Projected annual gross', value: '$1.14M', delta: '+11.2%' },
  { label: 'Accounts in motion', value: '286', delta: '+34 this week' },
  { label: 'Policy gates passed', value: '97.8%', delta: '3 reviews open' },
];

export const pipeline = [
  { account: 'Atlas Cold Storage', market: 'ERCOT · TX', load: '18.4 GWh', stage: 'Supplier bid', value: '$182,400', score: 94 },
  { account: 'Nova Hospitality Group', market: 'PJM · PA', load: '8.1 GWh', stage: 'LOA review', value: '$87,100', score: 91 },
  { account: 'Meridian Plastics', market: 'MISO · IL', load: '24.8 GWh', stage: 'Qualified', value: '$211,600', score: 88 },
  { account: 'Summit Retail Portfolio', market: 'NYISO · NY', load: '11.9 GWh', stage: 'Pricing', value: '$126,900', score: 86 },
  { account: 'Harbor Medical Campus', market: 'ISO-NE · MA', load: '7.6 GWh', stage: 'Data intake', value: '$79,800', score: 81 },
];

export const agents = [
  { name: 'Prospector', job: 'Finds commercial load opportunities', status: 'Running', metric: '1,842 signals' },
  { name: 'Qualifier', job: 'Scores usage, credit, timing & switchability', status: 'Running', metric: '286 qualified' },
  { name: 'Rate Intelligence', job: 'Normalizes supplier products and pricing', status: 'Running', metric: '41 offers fresh' },
  { name: 'Proposal Architect', job: 'Builds customer-specific quote packs', status: 'Running', metric: '19 prepared' },
  { name: 'Compliance Sentinel', job: 'Blocks unsupported markets and risky actions', status: 'Guarding', metric: '3 gates open' },
  { name: 'Contract Ops', job: 'Assembles LOA, enrollment & audit evidence', status: 'Review-only', metric: '12 packets' },
  { name: 'Retention Agent', job: 'Monitors renewal windows and churn risk', status: 'Running', metric: '48 renewals' },
  { name: 'Revenue Auditor', job: 'Reconciles expected vs received commissions', status: 'Running', metric: '99.2% matched' },
];

export const suppliers = [
  { name: 'Supplier Alpha', markets: 'ERCOT · PJM', products: 'Fixed · Indexed · Green', latency: '4m', quality: 'A' },
  { name: 'Supplier Vector', markets: 'MISO · PJM · NYISO', products: 'Fixed · Block+Index', latency: '11m', quality: 'A-' },
  { name: 'Supplier Terra', markets: 'ISO-NE · NYISO', products: 'Renewable · Fixed', latency: '8m', quality: 'A' },
  { name: 'Supplier GridOne', markets: 'ERCOT · MISO', products: 'Fixed · Indexed', latency: '17m', quality: 'B+' },
];
