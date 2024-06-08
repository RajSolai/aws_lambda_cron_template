import { handler } from '../src'

handler({})
	.then(() => {
		console.log('Test Completed')
	})
	.catch((error) => {
		console.error(error)
		console.error('Test Failed')
	})
