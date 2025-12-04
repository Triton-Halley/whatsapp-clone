import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { EllipsisVertical, Mic, Phone, Plus, Search, Sticker, UserIcon, Video } from 'lucide-react'
import { Typography } from '../ui/typography'
import { Input } from '../ui/input'


export default function ChatDetail() {
  return (
    <div className={`flex flex-col bg-[url('/back.png')] flex-1 bg-center bg-cover relative`}>
      <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
      {/* <div className="relative z-10">Content on top</div> */}
      {/* header */}
      <div className='grid grid-cols-20 z-10 relative bg-[#161717] p-2'>
        <div className='col-span-1'>
          <Avatar>
            <AvatarImage src={""} alt={""} />
            <AvatarFallback><UserIcon className='text-gray-500' /></AvatarFallback>
          </Avatar>
        </div>
        <div className='col-span-2'><Typography.H4>Shah Mamad</Typography.H4></div>
        <div className='col-span-13'></div>
        <div className='col-span-1 place-self-center'><Video /></div>
        <div className='col-span-1 place-self-center'><Phone /></div>
        <div className='col-span-1 place-self-center'><Search /></div>
        <div className='col-span-1 place-self-center'><EllipsisVertical /></div>
      </div>
      {/* chat body */}
      <div className='flex-1 flex flex-col gap-4 px-2 py-1 relative z-10'>
        <div className='w-full flex justify-end'>
          <div className='bg-[#144d37] p-2 rounded-lg w-3/4'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione impedit, amet magnam fugiat dolor voluptate, doloribus, sit sequi rerum molestias facilis nulla incidunt debitis molestiae! Tempore temporibus ea est obcaecati?</p>
          </div>
        </div>
        <div className='w-full flex justify-start'>
          <div className='bg-[#242626] p-2 rounded-lg w-3/4'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam laboriosam fuga eius, odio officiis vel consectetur molestias? Facere, natus. Recusandae esse odit ducimus excepturi voluptatem sapiente nulla hic porro neque.</p>
          </div>
        </div>


      </div>
      {/* chat input */}
      <div className='bg-[#242626] flex rounded-full relative z-10 p-2 m-2 items-center gap-2'>
        <Plus className='size-7 text-white' />
        <Sticker className='size-7 text-white' />
        <Input placeholder='Type a Message' className='border-0' />
        <Mic className='size-7 text-white' />
      </div>
    </div>
  )
}
