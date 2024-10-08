interface BannerProps {
  heading: string,
  content: string
}
export default function Banner({ heading, content }: BannerProps) {

  return (

    <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
      <p class="font-bold">Informational message</p>
      <p class="text-sm">Some additional text to explain said message.</p>
    </div>

  )
}
