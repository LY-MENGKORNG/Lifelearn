'use client'

import useGlobalContext from '@/commons/contexts/global-context'
import Dialog from '@/components/commons/Dialog'
import { Button } from '@/components/ui/button'

export default function AddRolePermissionButton() {
	const { t } = useGlobalContext()
	return (
		<Dialog
			title={t('configs.rolePermission.buttons.addRolePermission')!}
			buttonTitle={t('configs.rolePermission.buttons.addRolePermission')!}>
			<Button>Submit</Button>
		</Dialog>
	)
}
