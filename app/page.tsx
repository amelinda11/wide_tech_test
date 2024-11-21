"use client";

import {Tabs, Tab} from "@nextui-org/react"; 
import FirstTask from './pages/first-task';
import SecondTask from './pages/second-task';
import ThirdTask from './pages/third-task';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-8 py-6 px-2 md:p-24">
            <Tabs  aria-label="Tabs variants" fullWidth className="w-full p-2.5">
                <Tab title="First Task" className="w-full items-center">
                    <FirstTask/>
                </Tab>
                <Tab title="Second Task" className="w-full">
                    <SecondTask/>
                </Tab>
                <Tab title="Third Task" className="w-full flex flex-col items-center">
                    <ThirdTask/>
                </Tab>
             
            </Tabs>
        </main>
    )
}
