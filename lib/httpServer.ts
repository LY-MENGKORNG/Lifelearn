'use server'
export const http = async () => `${process.env.NEXT_APP_API_URL}:${process.env.NEXT_APP_API_PORT}/api`