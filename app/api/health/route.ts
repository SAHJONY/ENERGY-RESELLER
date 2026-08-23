export async function GET() {
  const databaseConfigured = Boolean(process.env.DATABASE_URL);
  const liveEnrollmentEnabled = process.env.LIVE_ENROLLMENT_ENABLED === 'true';

  return Response.json({
    ok: true,
    service: 'sahjony-energy-reseller-os',
    databaseConfigured,
    liveEnrollmentEnabled,
    mode: liveEnrollmentEnabled ? 'production-enabled' : 'fail-closed',
    timestamp: new Date().toISOString(),
  });
}
