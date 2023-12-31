import { Nav } from '@/components'
import './globals.css'
import { Inter , Poppins} from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    {/* <link rel="stylesheet" href="styles.css" /> */}

    <script src="https://kit.fontawesome.com/6d0e978303.js" crossorigin="anonymous">
    </script>
    <title>Schologamma</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
   

</head>

      <body className={inter.className}>
      {/* <Image
      priority
      src="/bg1.svg"
      height={320}
      width={320}
      alt="Follow us on Twitter"
    /> */}
      <Nav />
        {children}
        
        

  </body>
    </html>
  )
}
