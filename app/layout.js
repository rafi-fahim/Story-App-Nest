import Copyright from "@/components/Copyright";
import Navbar from "@/components/Navbar";
import styles from "@/styles/globals.css";
export const metadata = {
  title: "FSR Stories",
  description: "A place for Reading & Sharing life stories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Copyright />
      </body>
    </html>
  );
}
