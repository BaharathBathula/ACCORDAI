import QueryProvider from "@/components/query-provider";

import "@/styles/globals.css";

export const metadata = {
  title: "ACCORDAI",
  description: "AI-native insurance agency management platform"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
