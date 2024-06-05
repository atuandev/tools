export default function Background() {
  return (
    <div className='fixed inset-0 -z-10 w-screen h-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'>
      <div className='absolute bottom-auto left-auto right-0 top-0 h-[400px] w-[400px] translate-x-[10%] -translate-y-[10%] rounded-full bg-[rgba(228,38,38,0.5)] opacity-50 blur-[80px]'></div>
    </div>
  )
}
