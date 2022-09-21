import Link from 'next/link'

import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
import { NextPage } from 'next';


export default function AboutPage() {
  return (
    <>
        <h1>About Page</h1>

        <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.tsx</code>
        </p>
    </>
  )
}


AboutPage.getLayout = function getLayout( page: NextPage ) {
  return (
    <MainLayout>
      <DarkLayout>
       { page }
      </DarkLayout>
    </MainLayout>
  )
}