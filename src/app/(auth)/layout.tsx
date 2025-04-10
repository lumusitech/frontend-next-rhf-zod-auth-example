export const metadata = {
  title: 'Auth page',
  description: 'Auth page',
}
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='grid place-items-center min-h-screen'>{children}</div>
    </div>
  )
}
