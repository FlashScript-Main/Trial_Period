import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import {NextUIProvider} from "@nextui-org/react";
import { Footer, Header } from "@/components";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "FlashScript Trial Project",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" suppressHydrationWarning >
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-rose-400 dark:bg-blue-400`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NextUIProvider>
                        <Header />
                        {children}
                        <Footer />
                    </NextUIProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
