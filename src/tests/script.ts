import {check, sleep} from 'k6'
import http from 'k6/http'

export const options = {
	vus: 10,
	iterations: 300,
	duration: '30s',
}

export default function () {
	const res = http.get('https://www.saucedemo.com')
	check(res, {
		'is status 200': (r) => r.status === 200,
	})
	sleep(1)
}
