import * as z from 'zod'

const user = z.object({
	name: z.string(),
	email: z.string().email(),
})

export type User = z.infer<typeof user>
