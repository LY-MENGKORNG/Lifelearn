import React, { PropsWithChildren } from 'react'

type AuthLayoutProps = PropsWithChildren
export default function AuthLayout({ children }: AuthLayoutProps) {
	return <div>{children}</div>
}
