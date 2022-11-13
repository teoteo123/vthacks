'use client'
import { use, useEffect, useState } from 'react'
import Card from './card'
import { getListings } from './interactions'

export default function Collection() {
  const [listings, setListings] = useState<any>(null)

  useEffect(() => {
    getListings().then(l => {
      setListings(l)
    })
  }, [])

  return <>{listings && <Card {...listings[Math.random() * (listings as any[]).length]} />}</>
}
