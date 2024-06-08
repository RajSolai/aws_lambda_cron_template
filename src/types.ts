export type Visit = {
	visit_no?: string
	mrnumber?: string
	laboratory?: string
	radiology?: string
	cardiology?: string
	pharmacy_order?: string
	doctor_visit?: string
}

export type Message = {
	status?: string
	result?: Visit[]
}

export type Response = {
	status?: number
	message?: Message
}
