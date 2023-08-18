import http from './index'

export function flowingTrend() {
    return http.get('/bi/battle/dashboard/center/flowingTrend')
}