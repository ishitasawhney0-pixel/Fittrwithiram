
import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "FITTRWITHIRAM | Build a Stronger You",
    template: "%s | FITTRWITHIRAM",
  },
  description:
    "Discover personalized fitness coaching, sustainable nutrition, and a healthier lifestyle with FITTRWITHIRAM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body>
  {children}
  <WhatsAppButton />
</body>
    </html>
  );
}
