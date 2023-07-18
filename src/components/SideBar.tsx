import { useState } from 'react'
import './SideBar.css'
import home_icon from '../assets/home_icon.png'
import bell_icon from '../assets/bell_icon.png'
import edit_icon from '../assets/edit_icon.png'
import Buttons from './buttons'



function SideBar() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <ul class="channel-list">
                    <li class="active-channel" data-v-4e1f58b9="">
                        <a aria-current="page" href="/explore" class="active router-link-exact-active link-wrapper" target="_self" data-v-4e1f58b9="">
                            <img src={home_icon} />
                            <span class="channel" data-v-4e1f58b9="">
                                Discovery</span>
                        </a>
                    </li>
                    <li class="active-channel" data-v-4e1f58b9="">
                        <a aria-current="page" href="/explore" class="active router-link-exact-active link-wrapper" target="_self" data-v-4e1f58b9="">
                            <img src={bell_icon} />
                            <span class="channel" data-v-4e1f58b9="">
                                Post</span>
                        </a>
                    </li>
                    <li class="active-channel" data-v-4e1f58b9="">
                        <a aria-current="page" href="/explore" class="active router-link-exact-active link-wrapper" target="_self" data-v-4e1f58b9="">
                            <img src={edit_icon} />
                            <span class="channel" data-v-4e1f58b9="">
                                Notifications</span>
                        </a>
                    </li>
                </ul>
                <Buttons />
            </div>



        </>
    )
}

export default SideBar
