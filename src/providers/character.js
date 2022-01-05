export default function character({ http, baseURL }) {
  return Object.freeze({
    getInfoByName,
  })

  async function getInfoByName(name) {
    const url = `${baseURL}/character/info`
    const { data: { characterInfo } } = await http.get(url, { params: { name } })
    return characterInfo
  }
}