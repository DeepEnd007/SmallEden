import { useState } from 'react'
import './Buttons.css'



function Buttons() {
    const [count, setCount] = useState(0)

    return (
        <>
            <button class="greens-button-new login-btn large primary login-btn" >
                <span class="greens-button-new-box">
                    <span class="greens-button-new-text">
                        <span class="login-btn" >Log in</span>
                    </span></span></button>



        </>
    )
}

export default Buttons
