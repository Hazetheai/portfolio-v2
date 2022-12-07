import * as React from 'react'

import { Client } from '@notionhq/client'

const GetVacations = ({ response }) => {
  return (
    <div>
      <h1>GetVacations</h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const notion = new Client({
      auth: process.env.NOTION_INTEGRATION_VACATION_PLANNER_SECRET_KEY
    })

    const response = await notion.databases.query({
      database_id: '8da4f565986f4c29a892a8a7a59df19f'
    })

    console.log('Got response:', JSON.stringify(response, null, 2))
    const props = { response }

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default GetVacations
