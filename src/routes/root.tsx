import { Route, Routes } from 'react-router-dom'

import HomePage from '@/pages/HomePage'
const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage  />} />
      <Route path="/institute" element={<HomePage />} />
      <Route path="/type" element={<HomePage  />} />
    </Routes>
  )
}

export default Root
