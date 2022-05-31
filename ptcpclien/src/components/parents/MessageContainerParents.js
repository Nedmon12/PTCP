import React from 'react'
import Textinput from './Textinput'
import ParentsMessages from './ParentsMessages'
import MessageView from './MessageView'
export default function MessageContainer() {
  return (
    
        <div className='border rounded-lg h-full mx-44 bg-white flex flex-row mt-2' >
            <div className='basis-1/5 border-r flex flex-col'>
            <div className='basis-1/12 border-b'>
                <span className='text-xl justify-center pl-6' >Messages</span>
            </div>
            <div className='Conversations basis-11/12 flex flex-col overflow-y-scroll'>
                <div>
                    <ParentsMessages/>
                </div>
            </div>
        </div>
        <div className='basis-4/5 flex flex-col'>
            <div className='basis-1/12 border-b'>
                <span className='text-xl pt-8 pl-6'>Abel Dejene's Parent</span>
            </div>
            <div className='messagesview basis-10/12 border-b overflow-y-auto '>
                <div className='p-2 pt-3' >
                    <MessageView own={true} />
                    <MessageView />
                    <MessageView own={true}/>
                    <MessageView />
                </div>
            </div>
            <div className='messagesinput basis-1/12 '>
                <Textinput/>
            </div>
        </div>
        

    </div>

  )
}
