export default function character({ http, baseURL }) {
    return Object.freeze({
      getHealthStatus,
    })
  
    async function getHealthStatus() {
      const url = `${baseURL}`
      const res = await http.get(url)
      return res;
    }
  }