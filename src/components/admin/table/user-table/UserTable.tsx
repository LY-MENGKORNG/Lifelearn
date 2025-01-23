import DataTable from '@/components/commons/DataTable'
import { userTableColumns } from './column'
import { http } from '@/lib/httpClient'

export default async function UserTable() {
	return (
		<DataTable
			columns={userTableColumns}
			dataEndpoint={`${http}/users`}
			showFilter={false}
		/>
	)
}
