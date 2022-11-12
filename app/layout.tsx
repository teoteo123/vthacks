/* eslint-disable @next/next/no-sync-scripts */
import '../styles/globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
      </head>
      <body>{children}</body>
    </html>
  )
}
