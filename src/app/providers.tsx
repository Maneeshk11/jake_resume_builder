"use client";

import { AppStore, makeStore } from '@/lib/store';
import { NextUIProvider } from '@nextui-org/react'
import { useRef } from 'react';
import { Provider } from 'react-redux';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}


export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    }
    return <Provider store={storeRef.current}>{children}</Provider>
}
