import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Loading...',
	description: 'Loading for content...',
}
export default function loading() {
	return (
		<div className='w-full h-full flex justify-center items-center'>
			loading...
		</div>
	)
}
