'use client';
import { Button, TextArea, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import {useForm , Controller } from 'react-hook-form'
import "easymde/dist/easymde.min.css";
import React from 'react'
import { title } from 'process';
import { string } from 'zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';


interface IssueForm  {
  title : string;
  description : string; 
} 
const NewIssues = () => {
   const {register , control ,handleSubmit}= useForm<IssueForm>();
   const router = useRouter();
  return (
    <form className='max-w-xl' onSubmit={handleSubmit(async(data) => 
    { await axios.post('/api/issues' , data);
     router.push('/issues');}  
    )}>
        <TextField.Root placeholder='Title' {...register('title')}>
            {/* <TextField.Slot pl></TextField.Slot> */}
        </TextField.Root>
        <Controller 
          name='description'
          control={control} 
          render={({field}) => <SimpleMDE placeholder="Description" {...field} />} 
        />
        
        <Button>Submit New Issues</Button>
    </form>
  )
}

export default NewIssues
