import React, { PropsWithChildren } from 'react'

type WebLayoutProps = PropsWithChildren

export default function WebLayout({ children }: WebLayoutProps) {
	return <div>{children}</div>
}
