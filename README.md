# SAHJONY ENERGY RESELLER OS

Autonomous, governed commercial energy reseller operating system.

## Core capabilities
- Executive Command Center
- Revenue CRM
- Quote comparison and margin engine
- Supplier / REP registry and routing layer
- Enrollment operations control plane
- Governed AI agent workforce
- Compliance / policy-gate engine
- Commission and revenue reconciliation
- PostgreSQL / Neon-ready persistence
- Immutable audit model
- Fail-closed controls for consequential actions

## Autonomy model
AI may research, score, prepare, compare, draft, route, monitor and reconcile. It may not autonomously sign contracts, misrepresent licensing, move funds, switch a customer, fabricate pricing, or bypass customer/provider authorization.

## Local development
```bash
npm install
npm run dev
```

## Production gates
1. PostgreSQL/Neon production database, migrations and backups.
2. Authentication, owner/admin MFA, RBAC and tenant boundaries.
3. Jurisdiction-by-jurisdiction reseller/broker/agent authority matrix.
4. Executed supplier/REP relationships and real quote/enrollment access.
5. Customer consent/LOA workflow and approved utility-data access.
6. Approved disclosures, contracts and e-sign integration.
7. Email/SMS provider with consent, suppression and audit controls.
8. Commission statement ingestion and reconciliation.
9. Monitoring, rate limits, secrets management and incident response.
10. End-to-end sandbox tests before any live enrollment.
