import React from 'react'
import './Content.scss'
import Library from '../Library/Library'
import Songs from '../Songs/Songs'
import Upload from '../Upload/Upload'

function Content() {

  return (
    <div className='content'>
      <Library/>
      <Songs/>
    </div>
  )
}

export default Content