'use server'

import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url!)
  const emailStatus = searchParams.get('status') as EmailStatus | null

  const emails: Email[] = [
    {
      id: "1",
      from: "admin@gmail.com",
      replyTo: "user@gmail.com",
      subject: "Welcome to the team!",
      timestamp: "2022-10-01T10:00:00Z",
      preview: "Check out our new features!",
      tags: ["work"],
      status: 'unread'
    },
    {
      id: "2",
      from: "user@example.com",
      replyTo: "admin@example.com",
      subject: "Meeting reminder",
      timestamp: "2022-10-02T11:30:00Z",
      preview: "Don't forget about the meeting!",
      tags: ["meeting", "work"],
      status: 'read'
    },
    {
      id: "3",
      from: "admin@gmail.com",
      replyTo: "user@gmail.com",
      subject: "Urgent: Action required",
      timestamp: "2022-10-03T12:00:00Z",
      preview: "Please take action on this email",
      tags: ["urgent", "work"],
      status: 'unread'
    },
    {
      id: "4",
      from: "jonh.nicks@gmail.com",
      replyTo: "jnicks@gmail.com",
      subject: "Hello",
      timestamp: "2022-10-04T13:00:00Z",
      preview: "Hey there!",
      tags: ["personal", "work"],
      status: 'read'
    }
  ]
  const result = emails.filter(({ status }) => status === emailStatus)

  return new NextResponse(
    JSON.stringify({
      message: result.length ? 'List of all Eamils' : 'No results found',
      data: result,
      count: result.length
    }), { status: 201 })
}

export async function POST(req: NextRequest) { }

export async function PUT(req: NextRequest) {
  const { searchParams } = new URL(req.url!)
  const emailStatus = searchParams.get('status') as EmailStatus
  const emailId = searchParams.get('id') as string

  const emails: Email[] = [
    {
      id: "1",
      from: "admin@gmail.com",
      replyTo: "user@gmail.com",
      subject: "Welcome to the team!",
      timestamp: "2022-10-01T10:00:00Z",
      preview: "Check out our new features!",
      tags: ["work"],
      status: 'unread'
    },
    {
      id: "2",
      from: "user@example.com",
      replyTo: "admin@example.com",
      subject: "Meeting reminder",
      timestamp: "2022-10-02T11:30:00Z",
      preview: "Don't forget about the meeting!",
      tags: ["meeting", "work"],
      status: 'read'
    },
    {
      id: "3",
      from: "admin@gmail.com",
      replyTo: "user@gmail.com",
      subject: "Urgent: Action required",
      timestamp: "2022-10-03T12:00:00Z",
      preview: "Please take action on this email",
      tags: ["urgent", "work"],
      status: 'unread'
    },
    {
      id: "4",
      from: "jonh.nicks@gmail.com",
      replyTo: "jnicks@gmail.com",
      subject: "Hello",
      timestamp: "2022-10-04T13:00:00Z",
      preview: "Hey there!",
      tags: ["personal", "work"],
      status: 'read'
    }
  ]

  const result = emails.find(({ id }) => id === emailId)
  if (!result) {
    return new NextResponse(JSON.stringify({
      message: 'Email not found or invalid status',
      data: null,
    }), { status: 404 })
  }

  result.status = emailStatus
  return new NextResponse(JSON.stringify({
    message: 'Email status updated successfully',
    data: result,
  }), { status: 201 })
}