import { Link, Typography } from "@material-ui/core";

export default function MenuItem({children, ...rest}) {
    return (
        <Link>
        <Typography>
        { children }
        </Typography>
        </Link>
    )
}