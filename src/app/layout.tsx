import { Inter } from "next/font/google";
import "./globals.css";
import "../components/componentsGlobal.css";
import LeftSidePage from "@/components/LeftSidePage";
import { Metadata } from "next";
import { ThemeProvider } from "@/contexts/theme";
import { UserProvider } from "@/contexts/user";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavo Fuzer",
  description: "Meu portifólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <UserProvider>
        <html lang="pt_BR">
          <body className={inter.className}>
            <LeftSidePage>{children}</LeftSidePage>
          </body>
        </html>
      </UserProvider>
    </ThemeProvider>
  );
}
