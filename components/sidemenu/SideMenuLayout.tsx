"use client"
import Image from 'next/image'
import {
    ChatBubbleBottomCenterTextIcon as ChatOutlineIcon,
    PhoneIcon,
    SignalIcon,
    UserGroupIcon,
    PlayCircleIcon,
    Cog6ToothIcon,
    UserIcon
} from "@heroicons/react/24/outline"

import Link from 'next/link'
import Tooltipwrapper, { TooltipPosition } from './Tooltipwrapper'
import { MessageSquareTextIcon } from 'lucide-react'
import { ReactNode } from 'react'
export default function SideMenuLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='pt-2 pl-2'>
                <div className='flex items-center gap-1'>
                    <Image src={"/whatsapp.svg"} alt='' width={30} height={30} />
                    <h1 className='text-sm font-medium text-white'>WhatsApp</h1>
                </div>
            </div>
            <div className='grid grid-cols-20 gap-4 flex-1 pt-3 '>
                <div className='col-auto flex flex-col items-center justify-between gap-1 '>
                    <div className='flex flex-col items-center gap-3'>
                        <Tooltipwrapper content='Chats' position={TooltipPosition.right}>
                            <Link href="/" className='hover:bg-gray-600/20 p-1 transition-colors duration-150 rounded-full'>
                                <MessageSquareTextIcon className="size-7 text-white" />
                            </Link>
                        </Tooltipwrapper>
                        <Tooltipwrapper content='Calls' position={TooltipPosition.right}>
                            <Link href="/calls" className='hover:bg-gray-600/20 p-1 transition-colors duration-150 rounded-full'>
                                <PhoneIcon className="size-7 text-white" />
                            </Link>
                        </Tooltipwrapper>
                        <Tooltipwrapper content='Status' position={TooltipPosition.right}>
                            <Link href="/status" className='hover:bg-gray-600/20 p-1 transition-colors duration-150 rounded-full'>
                                <PlayCircleIcon className="size-7 text-white" />
                            </Link>
                        </Tooltipwrapper>
                        <Tooltipwrapper content='Channels' position={TooltipPosition.right}>
                            <Link href="/channels" className='hover:bg-gray-600/20 p-1 transition-colors duration-150 rounded-full'>
                                <SignalIcon className="size-7 text-white" />
                            </Link>
                        </Tooltipwrapper>
                        <Tooltipwrapper content='Community' position={TooltipPosition.right}>
                            <Link href="/community" className='hover:bg-gray-600/20 p-1 transition-colors duration-150 rounded-full'>
                                <UserGroupIcon className="size-7 text-white" />
                            </Link>
                        </Tooltipwrapper>
                    </div>
                    <div className='border-t flex flex-col gap-3 border-gray-600/30 pt-3 pb-3'>
                        <Tooltipwrapper content='Setting' position={TooltipPosition.right}>
                            <Link href="/setting" className='hover:bg-gray-600/20 p-1 transition-colors duration-150 rounded-full'>
                                <Cog6ToothIcon className="size-7 text-white" />
                            </Link>
                        </Tooltipwrapper>
                        <Tooltipwrapper content='Profile' position={TooltipPosition.right}>
                            <Link href="/Profile" className='hover:bg-gray-600/20 p-1 transition-colors duration-150 rounded-full'>
                                <UserIcon className="size-7 text-white" />
                            </Link>
                        </Tooltipwrapper>
                    </div>
                </div>
                <main className='col-span-19 text-white ring ring-gray-600/70 rounded-lg flex flex-col overflow-hidden'>
                    {children}
                </main>
            </div>
        </div>
    )
}
