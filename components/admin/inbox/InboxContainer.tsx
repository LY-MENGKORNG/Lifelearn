'use client'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'
import React, { lazy, Suspense, useState } from 'react'
import InboxList from './InboxList'
import useIsMobile from '@/hooks/use-mobile'
const EmailDetail = lazy(() => import('./EmailDetail'))

type Direction = 'horizontal' | 'vertical'

export default function InboxContainer() {
	const isMobile = useIsMobile()
	const [isClosePanel, setIsClosePanel] = useState<boolean>(isMobile)
	const [selectedEmail, setSelectedEmail] = useState<Email>()

	const responsiveSize = {
		direction: isMobile ? 'vertical' : ('horizontal' as Direction),
		panelOne: {
			default: isMobile ? undefined : 40,
			minSize: isMobile ? undefined : 30,
		},
		panelTwo: {
			default: isMobile ? undefined : 60,
			minSize: isMobile ? 30 : 40,
		},
	}

	return (
		<ResizablePanelGroup direction={responsiveSize.direction}>
			<ResizablePanel
				minSize={responsiveSize.panelOne.minSize}
				defaultSize={responsiveSize.panelOne.default}>
				<InboxList
					onSelectEmail={setSelectedEmail}
					isMobile={isMobile}
					selectedEmail={selectedEmail}
				/>
			</ResizablePanel>

			<ResizableHandle withHandle />

			<ResizablePanel
				minSize={responsiveSize.panelTwo.minSize}
				defaultSize={responsiveSize.panelTwo.default}>
				{selectedEmail ? (
					<Suspense
						fallback={<div className='w-full h-full center'>Loading...</div>}>
						<EmailDetail
							email={selectedEmail}
							onClosePanel={setIsClosePanel}
						/>
					</Suspense>
				) : null}
			</ResizablePanel>
		</ResizablePanelGroup>
	)
}
