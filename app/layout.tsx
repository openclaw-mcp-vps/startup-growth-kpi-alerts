import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KPI Alerts — Smart Startup Metric Monitoring",
  description: "Get intelligent alerts when your startup metrics hit danger zones. Monitor CAC, LTV, churn, and runway before problems become critical."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ffabe8c1-1272-462b-8678-35429c4c7d77"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
