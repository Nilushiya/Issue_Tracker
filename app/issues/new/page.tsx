'use client';
import { Button, Callout, Text, TextArea, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import {useForm , Controller } from 'react-hook-form'
import "easymde/dist/easymde.min.css";
import React, { useState } from 'react'
import { title } from 'process';
import { string } from 'zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validation';
import {z} from 'zod';
import ErrorMessage from '@/app/Components/ErrorMessage';
import Spinner from '@/app/Components/Spinner';

type IssueForm = z.infer<typeof createIssueSchema>

// interface IssueForm  {
//   title : string;
//   description : string; 
// } 
const NewIssues = () => {
   const {register , control ,handleSubmit , formState:{errors}}= useForm<IssueForm>({
    resolver : zodResolver(createIssueSchema)
   });
   const router = useRouter();
   const [error , setError] = useState('');
   const [spinner , setSpinner] = useState(false)

  return (
    <div className='max-w-xl'>
      {error && <Callout.Root color='red' className='mb-5'>
        <Callout.Text>
          {error}
        </Callout.Text>
      </Callout.Root>}
      <form className=' space-y-3' onSubmit={handleSubmit(async(data) => {
     try{
      { 
        setSpinner(true)
        await axios.post('/api/issues' , data);
        router.push('/issues');} 
     } 
     catch(error){
      setSpinner(false)
      setError('An unexpected error occurred.')
      // console.log("Error :", error )
     }
    })}>
        <TextField.Root placeholder='Title' {...register('title')}>
            {/* <TextField.Slot pl></TextField.Slot> */}
        </TextField.Root>
        <ErrorMessage >
          {errors.title?.message}
        </ErrorMessage>
        {/* {errors.title && <Text color='red' as='p'>{errors.title.message}</Text>} */}
        <Controller 
          name='description'
          control={control} 
          render={({field}) => <SimpleMDE placeholder="Description" {...field} />} 
        />
        <ErrorMessage >
          {errors.description?.message}
        </ErrorMessage>
        {/* {errors.description && <Text color='red' as='p'>{errors.description.message}</Text>} */}
        <Button>Submit New Issues {spinner && <Spinner/>}</Button>
    </form>
    </div>
  )
}

export default NewIssues
