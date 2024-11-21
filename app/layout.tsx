"use client";

import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Head>
                <title>Anisa Melinda R</title>
                <meta name="description" content="Generated by create next app for a complete test from PT Wide Technologies Indonesia" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <NextUIProvider>
                    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
                </NextUIProvider>
            </body>
        </html>
    );
}