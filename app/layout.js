"use client"
import Copyright from "@/components/Copyright";
import Navbar from "@/components/Navbar";
import { Analytics } from '@vercel/analytics/react';
import styles from "@/styles/globals.css";
import { AuthContextProvider } from "./context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950" >
          <AuthContextProvider>
            <Navbar />
            {children}
            <Analytics />
            <Copyright />
          </AuthContextProvider>
      </body>
    </html>
  );
}
