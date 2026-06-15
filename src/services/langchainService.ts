export const askPortfolioBot = async (userMessage: string, onChunk: (text: string) => void) => {
  try {
console.log()
    const response = await fetch(`${import.meta.env.VITE_WORKER_URL_PROD}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: userMessage }),
    })
    if (!response.body) throw new Error('No readable stream body returned from server.');
    // 4. Initialize the stream reader
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let done = false;

    // 5. Read stream chunks sequentially until execution finishes
    while (!done) {
      const { value, done: readingDone } = await reader.read();
      done = readingDone;

      // Decode the raw binary text chunk buffer into a readable string
      const chunk = decoder.decode(value, { stream: !done });
      if(chunk){
        onChunk(chunk)
      }
    }
  }
  catch (error) {
console.error('Streaming connection error:', error);
    }
  }