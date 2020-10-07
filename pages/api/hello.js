// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  if (req.method === "POST") {
    const { body } = req
    await fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'x-token-access': 'random'
      },
      body
    })
    res.statusCode = 200
    res.json('ok')
  } else {
    res.statusCode = 200
    res.json({ name: 'John Doe' })
  }
}
