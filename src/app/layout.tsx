import Providers from "@/components/Providers";
import "./globals.css";

export const metadata = {
  title: "ChatterBox | Home",
  description: "Welcome to the ChatterBox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
