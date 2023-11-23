"use client"
import Copyright from "@/components/Copyright";
import Navbar from "@/components/Navbar";
import styles from "@/styles/globals.css";
import { AuthContextProvider } from "./context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950" >
          <AuthContextProvider>
            <Navbar />
            {children}
            <Copyright />
          </AuthContextProvider>
      </body>
    </html>
  );
}
