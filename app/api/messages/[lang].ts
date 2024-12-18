import { promises as fs } from 'fs'
import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lang } = req.query
  const filePath = path.join(process.cwd(), 'messages', `${lang}.json`)

  try {
    if (req.method === 'GET') {
      // READ: Fetch JSON data
      const fileContents = await fs.readFile(filePath, 'utf-8')
      res.status(200).json(JSON.parse(fileContents))
    } else if (req.method === 'PUT') {
      // UPDATE: Modify JSON data
      const newData = req.body
      await fs.writeFile(filePath, JSON.stringify(newData, null, 2))
      res.status(200).json({ message: 'File updated successfully', data: newData })
    } else if (req.method === 'DELETE') {
      // DELETE: Remove the file
      await fs.unlink(filePath)
      res.status(200).json({ message: 'File deleted successfully' })
    } else {
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } catch (error) {
    res.status(500).json({ message: 'Error handling the file', error: error })
  }
}
