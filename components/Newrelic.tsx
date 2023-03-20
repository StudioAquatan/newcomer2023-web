const scripts = process.env.NEXT_PUBLIC_NEWRELIC_SCRIPT ?? "";

export default function Newrelic() {
  return <script dangerouslySetInnerHTML={{ __html: scripts }} />;
}
