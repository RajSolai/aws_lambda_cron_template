import { Response } from '../types'
import { KIMS_API_URL, KIMS_AUTH_KEY } from './constants'

export const fetchTodayFootPrintData = async (date: string) => {
	try {
		const res = await fetch(KIMS_API_URL, {
			method: 'POST',
			headers: {
				Authorization: KIMS_AUTH_KEY,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ date }),
		})
		const data = await res.json()
		return data as Response
	} catch (error) {
		console.error(error)
		throw new Error('Failed to fetch footprint data')
	}
}
