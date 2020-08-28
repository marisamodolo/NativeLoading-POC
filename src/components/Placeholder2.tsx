import React from 'react'
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade
} from "rn-placeholder"

const Skeleton = () => (
    <Placeholder
        Animation={Fade}
        Left={PlaceholderMedia}
    >
        <PlaceholderLine />
        <PlaceholderLine />
    </Placeholder>
)


export default Skeleton