import Link from 'next/link';
import React from 'react'

const ClientSideRoute = ({
    children,
     route,
  }: {
    children: React.ReactNode;
    route: string
  }) => {
  return (
    <Link>{children}</Link>
  )
}

export default ClientSideRoute