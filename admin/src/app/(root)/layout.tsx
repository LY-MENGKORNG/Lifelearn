import { ReactNode } from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "../globals.css"
import { ThemeProvider, AppSidebar } from "@/components"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "LifeLearn",
  description: "Life long learning",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative dark:selection:bg-teal-300 selection:bg-cyan-300`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange>
          <SidebarProvider className='relative'>
            <AppSidebar>
              <main className='flex flex-col min-h-svh'>{children}</main>
              <Toaster />
            </AppSidebar>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
