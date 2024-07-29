import { NextRequest, NextResponse } from "next/server";
import prisma from '@/prisma/client';
import {createIssueSchema} from '../../validation'



export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log("hi", body);
    
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 });
    }

    try {
        const newIssue = await prisma.issue.create({
            data: {
                tilte: body.title,
                description: body.description
            }
        });

        return NextResponse.json(newIssue, { status: 201 });
    } catch (error) {
        console.error("Error creating issue:", error);
        return NextResponse.json({ error: 'Failed to create issue' }, { status: 500 });
    }
}
