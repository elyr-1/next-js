import AuthProvider from "@/components/AuthProvider";
import "./globals.css";
import { Inter_Tight } from "next/font/google";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata = {
  title: "77 Billing App",
  description: "Billing App by 77GSI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/77logo.png" />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
