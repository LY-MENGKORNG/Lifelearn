import {
	LogoutLink,
	LoginLink,
	RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components'

export default function SignInPage() {
	return (
		<div>
			<LoginLink>Login</LoginLink>
			<RegisterLink>Register</RegisterLink>
		</div>
	)
}
