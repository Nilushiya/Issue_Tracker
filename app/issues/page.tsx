import React from 'react'
import {Button} from '@radix-ui/themes'
import Link from 'next/link'

const IssuesPage = () => {
  return (
    <div><Button><Link href='/issues/new'>IssuesPage</Link></Button></div>
  )
}

export default IssuesPage