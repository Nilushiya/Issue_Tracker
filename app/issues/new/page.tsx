'use client';
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssues = () => {
  return (
    <div className='max-w-xl'>
        <TextField.Root placeholder='Title'>
            {/* <TextField.Slot pl></TextField.Slot> */}
        </TextField.Root>
        <TextArea placeholder="Description" />
        <Button>Submit New Issues</Button>
    </div>
  )
}

export default NewIssues
