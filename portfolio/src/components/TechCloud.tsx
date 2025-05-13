import { IconCloud } from "@/components/magicui/icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "spring",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "vercel",
  "testinglibrary",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "cplusplus",
  "visualstudiocode",
  "apple",
  "rider",
  "figma",
  "notion",
  "dotnet",
]

export default function IconCloudDemo() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`)

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  )
}
