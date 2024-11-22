"use client";

import {Tabs, Tab} from "@nextui-org/react"; 
import StateManagement from './component/state-management';
import Validation from './component/validation';
import Integration from './component/integration';
import RoutingSection from "./component/routing";

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
                <Tab title="Routing Section" className="w-full flex flex-col items-center">
                    <RoutingSection/>
                </Tab>
            </Tabs>
        </main>
    )
}
