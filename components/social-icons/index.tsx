import { AiFillMail, AiFillLinkedin, AiFillTwitterSquare, AiFillGithub } from 'react-icons/ai'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: AiFillMail,
  github: AiFillLinkedin,
  linkedin: AiFillGithub,
  twitter: AiFillTwitterSquare,
}

const SocialIcon = ({ kind, href, size = 64 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400 text-2xl`}
      />
    </a>
  )
}

export default SocialIcon
