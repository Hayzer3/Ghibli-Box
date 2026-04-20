import { Poppins, Rubik } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});


export default function FolderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable} antialiased`}>
        <section style={{ padding: '20px' }}>
          {children}
        </section>
      </body>
    </html>
    
  )
}