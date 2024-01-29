import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "tetisan shop",
  description: "global ecommerce for every thing",
};

const vazirFont = localFont({ src: "../../public/font/Vazir-Medium.woff2" });

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`bg-gray-50 ${vazirFont.className}`}>{children}</body>
      </html>
  );
}
