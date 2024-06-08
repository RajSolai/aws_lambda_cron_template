import moment from 'moment-timezone'
import { fetchTodayFootPrintData } from './utils/getKimsData'
import { MAIN_FEEDBACK_FILL } from './utils/constants'
import { OpdFormConfig } from './utils/OpdForm'

export const handler = async (event: any) => {
	const todayDateString = moment()
		.tz('Asia/Kolkata')
		.format('DD-MMM-YYYY')
		.toUpperCase()

	console.log('=========> Started Cron For Day : ', todayDateString)

	try {
		const footPrintData = await fetchTodayFootPrintData(todayDateString)

		const promiseMap = footPrintData?.message?.result?.map(async (data) => {
			const {
				mainFormId,
				labFormId,
				radiologyFormId,
				pharmacyOpd,
				cardiologyFormId,
			} = OpdFormConfig
			let url = MAIN_FEEDBACK_FILL
			const mrnumber = data?.mrnumber

			url += `${mainFormId},`
			if (data?.laboratory != '0') {
				url += `${labFormId},`
			}
			if (data?.radiology != '0') {
				url += `${radiologyFormId},`
			}
			if (data?.pharmacy_order != '0') {
				url += `${pharmacyOpd},`
			}
			if (data?.cardiology != '0') {
				url += `${cardiologyFormId},`
			}
			url = url.slice(0, -1)
			url += `&mrn=${mrnumber}`
			url += '&isScroll=true'
			console.log('=========> URL : ', url)
		})

		console.log('=========> Cron Success for Day :', todayDateString)
	} catch (error) {
		console.error(error)
		console.error('=========> Cron Failed for Day :', todayDateString)
	}
}
