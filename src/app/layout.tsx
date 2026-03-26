import type { Metadata } from "next";
import { Cinzel, DM_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Campus Innovate Hackathon 2.0",
  description: "Join the most prestigious 6-hour hackathon for college students. Innovate, build, and transform ideas into real-world solutions at GHRCEMN.",
  keywords: ["Hackathon", "Campus Innovate", "GHRCEM", "Nagpur", "Coding Competition", "Web3", "AI", "Tech Event", "Student Hackathon"],
  authors: [{ name: "Omkar Ramgirwar", url: "https://omkarramgirwar.vercel.app/" }],
  openGraph: {
    title: "Campus Innovate Hackathon 2.0 | Build at the Edge of Innovation",
    description: "Join the most prestigious 6-hour student hackathon. Compete for a 7K+ prize pool, learn from mentors, and build next-gen solutions at GHRCEM.",
    url: "https://campus-innovate.vercel.app",
    siteName: "Campus Innovate Hackathon",
    images: [
      {
        url: "/codecrafterslogo.png",
        width: 800,
        height: 600,
        alt: "Campus Innovate Hackathon 2.0 Logo",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campus Innovate Hackathon 2.0",
    description: "Innovate, build, and transform. Compete for a 7K+ prize pool and electronic goodies at GHRCEM Nagpur.",
    creator: "@omkar_ramgirwar",
    images: ["/codecrafterslogo.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${dmSans.variable} h-full antialiased dark`}
    >
      <body className="font-body min-h-full flex flex-col bg-background text-foreground relative selection:bg-neon-cyan/30 selection:text-neon-cyan">
        <div className="fixed inset-0 z-[-1] bg-background pointer-events-none" />
        <div className="fixed inset-0 z-[-1] bg-stars opacity-50 pointer-events-none" />
        {children}
      </body>
    </html>
  );
}

