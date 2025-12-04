import React from 'react'
import ChatList from './ChatList'
import ChatDetail from './ChatDetail'
import { Separator } from "@/components/ui/separator"
export default function Chat() {
    return (
        <div className='grid grid-cols-12 flex-1'>
            <div className='col-span-4 pr-2 p-2 border-r border-gray-600/50 bg-[#161717]'>
                <ChatList />
            </div>
            <div className='col-span-8 flex flex-col'>
                <ChatDetail />
            </div>
        </div>
    )
}
