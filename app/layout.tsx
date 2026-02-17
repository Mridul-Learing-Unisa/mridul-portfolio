import "./globals.css";
import Menu from "../components/Menu";
import StarBackground from "../components/StarBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white">
        {/* Background */}
        <StarBackground />

        {/* Foreground */}
        <div className="relative z-10">
          <Menu />
          {children}
        </div>
      </body>
    </html>
  );
}
