import React from 'react'
import { Typography } from '../ui/typography'
import { Input } from "@/components/ui/input"
import Chip from '../ui/chip'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { CheckCheck, UserIcon } from 'lucide-react'
export function InputDemo() {
    return <Input type="email" placeholder="Email" />
}
const category = ["All", "Unread", "Favorites", "Groups"]
const chats = [
    {
        avatar: "",
        name: "Shah Mamad",
        last_message: "There is a lots of danger on the way please be careful",
        last_message_time: "17:43",
        active: true
    },
    {
        avatar: "",
        name: "ASL Kar",
        last_message: "Take Care",
        last_message_time: "22:00",
        active: false
    },
    {
        avatar: "",
        name: "Customer",
        last_message: "Send the link",
        last_message_time: "10:05",
        active: false
    }
]
export default function ChatList() {
    return (
        <div className='flex flex-col gap-4'>
            <Typography.H3>
                Chats
            </Typography.H3>
            {/* Searchbox */}
            <Input className='rounded-full' placeholder='Search or start a new chat' />

            <div className='flex items-center gap-2'>
                {category.map((cat, index) => (<Chip key={`${index}${cat}`}>{cat}</Chip>))}
            </div>

            {/*  chat list*/}
            {chats.map((chat, i) => {
                return <div key={`${chat.name}`} className={`grid grid-cols-12 ${chat.active ? "bg-gray-500/10" : ""} px-4 py-4 rounded-xl cursor-pointer`}>
                    <div className='col-span-1'>
                        <Avatar>
                            <AvatarImage src={chat.avatar} alt={chat.name} />
                            <AvatarFallback><UserIcon className='text-gray-500' /></AvatarFallback>
                        </Avatar>
                    </div>
                    <div className='col-span-10'>
                        <div>{chat.name}</div>
                        <div className='flex items-center gap-1'><CheckCheck className='size-5 text-blue-400' /><Typography.Muted>{chat.last_message}</Typography.Muted></div>
                    </div>
                    <div className='col-span-1'><Typography.Muted>{chat.last_message_time}</Typography.Muted></div>
                </div>
            })}

        </div>
    )
}
