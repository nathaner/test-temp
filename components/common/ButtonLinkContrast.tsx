import Link from 'next/link'

export default function ButtonLinkContrast({href, children}) {
    return (
        <Link href={href}>
            <a className="btn btn-contrast">{children}</a>
        </Link>
    )
}