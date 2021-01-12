import Link from 'next/link'

export default function ButtonLinkOutlined({href, children}) {
    return (
        <Link href={href}>
            <a className="btn btn-outlined">{children}</a>
        </Link>
    )
}