import {check, sleep} from 'k6'
import http from 'k6/http'

export const options = {
	vus: 10,
	duration: '30s',
}

export default function () {
	const res = http.get('https://quickpizza.grafana.com')
	check(res, {
		'is status 200': (r) => r.status === 200,
	})
	sleep(1)
}
