
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " Sensei  ",
  description: " Kaya to ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header style={{backgroundColor: "lightblue",padding: "1rem", marginBottom: "2rem",}}>   
        <p>Header Tag</p>
      </header>


      {children}

      <footer style={{backgroundColor: "whitesmoke",padding: "1rem", marginTop: "2rem",}}>   
        <p>Footer</p>
      </footer>
      </body>
    </html>
  );
}