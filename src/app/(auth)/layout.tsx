export const metadata = {
  title: 'Auth page',
  description: 'Auth page',
}
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='min-h-screen bg-slate-600 text-white text-shadow-2xs'>{children}</div>
    </div>
  )
}
