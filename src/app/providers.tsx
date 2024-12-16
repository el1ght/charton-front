"use client";
import { QueryClientProvider } from '@tanstack/react-query'
import { getQueryClient } from "@/app/get-query-client";
import type * as React from 'react'
import { I18nProvider } from "@/core/i18n/provider";
import ToasterProvider from "@/providers/ToasterProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
    const queryClient = getQueryClient()

    return (
        <>
            <ToasterProvider />
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </>

    )
}