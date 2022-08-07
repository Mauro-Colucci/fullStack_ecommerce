import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWI0YWUyZDZhMjkxNjJmM2M1YmQ4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTgzMTA2MywiZXhwIjoxNjYwMDkwMjYzfQ.s1fLcuQ9qjs9eETuQZv_nY1eVeb77-p5DYWbm30cSXY"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})