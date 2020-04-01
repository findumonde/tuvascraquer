import React from "react"

interface Props {
  authors: Record<string, string>
}

const Authors: React.FC<Props> = ({ authors }) => {
  const list: React.ReactNode[] = []
  const keys = Object.keys(authors)
  keys.forEach((name, index) => {
    list.push(
      <a key={index} href={authors[name]}>
        {name}
      </a>
    )
    if (index < keys.length - 2) {
      list.push(", ")
    } else if (index === keys.length - 2) {
      list.push(" & ")
    }
  })
  return <>{list}</>
}

export default Authors
