import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CFA Level I Leveraged Support Course | Financial Analyst Academy',
  description:
    '英語テキストに時間を奪われる前に、日本語で要点を掴み、公式演習問題を効率よく攻略。忙しい社会人のための伴走型CFA学習サポート。',
  openGraph: {
    title: 'CFA Level I Leveraged Support Course',
    description: '日本語で要点を掴み、公式演習問題を効率よく攻略。忙しい社会人のための伴走型CFA学習サポート。',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
