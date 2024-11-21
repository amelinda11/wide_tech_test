"use client";

import {Tabs, Tab} from "@nextui-org/react"; 
import StateManagement from './pages/state-management';
import Validation from './pages/validation';
import Integration from './pages/integration';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-8 py-6 px-2 md:p-24">
            <Tabs  aria-label="Tabs variants" fullWidth className="w-full p-2.5">
                <Tab title="State Management Section" className="w-full items-center">
                    <StateManagement/>
                </Tab>
                <Tab title="Form Handling and Validation Section" className="w-full">
                    <Validation/>
                </Tab>
                <Tab title="Integration Section" className="w-full flex flex-col items-center">
                    <Integration/>
                </Tab>
             
            </Tabs>
        </main>
    )
}
