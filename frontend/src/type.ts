type User = {
  firstName: string,
  lastName: string,
  email: string,
  address?: string,
  phone?: string
}

export interface ConfirmBtn {
  props: {
    success: {
      type: boolean,
      required: false,
      default: () => true,
    },
    warn: {
      type: boolean,
      required: false,
    },
    contrast: {
      type: boolean,
      required: false,
    },
    info: {
      type: boolean,
      required: false,
    },
    secondary: {
      type: boolean,
      required: false,
    },
  },
  confirmType: "success" | "warn" | "contrast" | "info" | "secondary" | undefined
}

export interface RouteMeta {
  ROLE?: string,
  LAYOUT: string,
  REQUIRED_AUTH: boolean,
}

