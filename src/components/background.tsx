export function Background() {
  return (
    <div className='fixed inset-0 -z-10 w-screen h-screen bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#131313_1px,transparent_1px)] [background-size:16px_16px]'>
      <div className='absolute bottom-auto left-auto right-0 top-0 h-[400px] w-[400px] translate-x-[-20%] translate-y-[-70%] md:translate-x-[10%] md:-translate-y-[10%] rounded-full bg-[rgba(228,38,38,0.4)] opacity-50 blur-[80px]' />
      <div className='absolute top-auto left-0 right-auto bottom-0 h-[400px] w-[400px] translate-x-[10%] translate-y-[50%] md:-translate-x-[20%] md:translate-y-[35%] rounded-full bg-[rgba(228,38,38,0.4)] opacity-50 blur-[80px]' />
    </div>
  )
}
