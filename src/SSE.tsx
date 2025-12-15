import { useSSE } from 'react-eventsource'

function SSE() {


  const { readyState, close, reconnect } = useSSE({
    url: 'http://127.0.0.1:8000/v1/get_response',
    headers: {
      'Authorization': 'Bearer your-token',
      'X-API-Key': 'your-api-key'
    },
    onMessage: (message) => {
      console.log('Received:', message.data)
    },
    onError: (error) => {
      console.error('SSE Error:', error)
    }
  })

  const status = ['CONNECTING', 'OPEN', 'CLOSED'][readyState]

  return (
    <div>
      <p>Connection: {status}</p>
      <button onClick={close}>Close</button>
      <button onClick={reconnect}>Reconnect</button>
    </div>
  )
}

export default SSE
