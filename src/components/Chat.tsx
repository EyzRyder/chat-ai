'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area";
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api:'api/chat'
  })

  return (
          <Card className="w-[440px] ">
        <CardHeader>
          <CardTitle>
          Chat AI
          </CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
        </CardHeader>
      <CardContent className="">
        <ScrollArea className="h-[640px] w-full pr-4">
  {/*
  <div className="flex gap-3 text-slate-600 text-sm mb-4">
            <Avatar>
              <AvatarFallback>GB</AvatarFallback>
              <AvatarImage src="https://avatars.githubusercontent.com/u/85580011?v=4"/>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Ze User:</span>
              Yoyo, what&apos;s your opinion on JavaScript Frameworks?
            </p>
          </div>
          <div className="flex gap-3 text-slate-600 text-sm mb-4">
            <Avatar>
              <AvatarFallback>GB</AvatarFallback>
              <AvatarImage src="/logo.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">ZE AI:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quibusdam incidunt, doloribus est magnam eius dolores accusantium sint, aperiam minima quaerat totam officiis consequatur esse. Alias architecto accusamus impedit unde!
            </p>
          </div>
          */}

        {messages.map(message => {
          return (
            <div className="flex gap-3 text-slate-600 text-sm mb-4" key={message.id}>
              {
                message.role === 'user' &&
                          (<Avatar>
              <AvatarFallback>GB</AvatarFallback>
              <AvatarImage src="https://avatars.githubusercontent.com/u/85580011?v=4"/>
                </Avatar>)}
              {
                message.role === 'assistant' &&
              (<Avatar>
              <AvatarFallback>GB</AvatarFallback>
              <AvatarImage src="/logo.png" />
                </Avatar>)
              }

            <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
{
                message.role === 'user' &&
                    ("Ze User")
                  }
              {
                message.role === 'assistant' &&
              ("ZE AI")
              }
              </span>
              {message.content}
            </p>
          </div>
          )
        })}


              </ScrollArea>
        </CardContent>
      <CardFooter >
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input placeholder="how can I help you?" value={input} onChange={handleInputChange}/>
          <Button type="submit">Send</Button>
        </form>
        </CardFooter>
      </Card>
  )
}
