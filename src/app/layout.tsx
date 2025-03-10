import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Teja.Dev | Portfolio",
  description: "Professional portfolio of Teja Kanchipamu - Full Stack Developer",
  icons: {
    icon: "/favicon.ico"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}
