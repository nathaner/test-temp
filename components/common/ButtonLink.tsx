import Link from 'next/link'

export default function ButtonLink({href, children}) {
    return (
        <Link href={href}>
            <a className="btn">{children}</a>
        </Link>
    )
}