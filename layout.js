app/export const metadata = {
  title: "PT Master System",
  description: "Personal Trainer Management System"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>PT Master System</h1>
      <p>System is running 🚀</p>
    </div>
  )
}
