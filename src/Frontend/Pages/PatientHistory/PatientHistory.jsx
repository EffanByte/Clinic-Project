import React from 'react'
import BlogsNav from '../../Components/Blogs/BlogsNav'
import HistoryTable from '../../Components/PatientHistory/HistoryTable'

function PatientHistory() {
  return (
    <div>
      <div style={{backgroundColor: "aliceblue"}}>
        <BlogsNav />
        <HistoryTable />
      </div>
    </div>
  )
}

export default PatientHistory
