import { createContext, useState } from 'react'
import c_logo1 from './assets/img/logo1.svg'
import c_logo2 from './assets/img/logo2.svg'
import c_logo3 from './assets/img/logo3.svg'
import product1 from './assets/img/product1.png'
import news1 from './assets/img/news1.png'
import news2 from './assets/img/news2.png'
import news3 from './assets/img/news3.png'
import news4 from './assets/img/news4.png'
import news5 from './assets/img/news5.png'

export const DataContext = createContext();

export const DataProvider = props => {

    const [clickedItem, setClickedItem] = useState(null); // clicked homepage dot
    const [firstSlide, setfirstSlide] = useState(0); // first news item shown
    const [lastSlide, setlastSlide] = useState(5); // last news item shown
    const [clickedSlide, setclickedSlide] = useState(0); // clicked slider button in news-line
    const [clickedNews, setclickedNews] = useState(0); // clicked news item to read
    const [firstProduct, setfirstProduct] = useState(0); // first product item shown
    const [lastProduct, setlastProduct] = useState(6); // last product item shown
    const [clickedProductSlide, setClickedProductSlide] = useState(0); // clicked products page 
    const [firstWidget, setfirstWidget] = useState(0); // first product item shown
    const [lastWidget, setlastWidget] = useState(3); // last product item shown
    const [clickedWidgetSlide, setClickedWidgetSlide] = useState(0); // clicked products page 

    // HOMEPAGE SETTERS
    const [homePage, setHomePage] = useState([
        {
            id: 0,
            clicked: true
        },
        {
            id: 1,
            clicked: false
        },
        {
            id: 2,
            clicked: false
        }
    ]);

    // WIDGETS
    const [widget, setWidget] = useState([
        {
            id: 1,
            logo: <svg width="152" height="170" viewBox="0 0 152 170" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M2.48058 154.544C3.25612 155.326 4.18058 155.932 5.25468 156.358C6.32806 156.786 7.50791 157 8.79281 157C10.0158 157 11.1676 156.758 12.2496 156.274C13.3309 155.79 14.2475 155.016 15 153.951L12.5547 152.162C12.0065 152.887 11.4144 153.416 10.7799 153.746C10.1453 154.077 9.49065 154.242 8.81655 154.242C7.95396 154.242 7.1741 154.081 6.4777 153.758C5.77986 153.435 5.17986 152.992 4.67914 152.427C4.17626 151.863 3.78849 151.193 3.51439 150.419C3.24029 149.645 3.1036 148.798 3.1036 147.879C3.1036 147.025 3.24029 146.226 3.51439 145.484C3.78849 144.742 4.17626 144.092 4.67914 143.536C5.17986 142.979 5.77986 142.544 6.4777 142.229C7.1741 141.915 7.95396 141.757 8.81655 141.757C9.3964 141.757 9.97266 141.87 10.5446 142.096C11.1165 142.322 11.7086 142.774 12.3201 143.451L14.6237 141.709C13.7935 140.726 12.8964 140.028 11.9324 139.616C10.9683 139.205 9.92158 139 8.79281 139C7.50791 139 6.32806 139.213 5.25468 139.64C4.18058 140.068 3.25612 140.677 2.48058 141.467C1.70432 142.258 1.09712 143.213 0.658273 144.334C0.218705 145.456 0 146.702 0 148.071C0 149.412 0.218705 150.629 0.658273 151.725C1.09712 152.823 1.70432 153.762 2.48058 154.544Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M24.5833 150.42C24.3039 149.646 24.1638 148.798 24.1638 147.879C24.1638 147.025 24.3039 146.226 24.5833 145.485C24.8627 144.742 25.258 144.093 25.7699 143.537C26.281 142.98 26.8919 142.544 27.6033 142.23C28.314 141.916 29.1089 141.758 29.9883 141.758C30.8661 141.758 31.6662 141.916 32.3849 142.23C33.1037 142.544 33.719 142.98 34.2301 143.537C34.742 144.093 35.1373 144.742 35.4167 145.485C35.6961 146.226 35.8362 147.025 35.8362 147.879C35.8362 148.798 35.6961 149.646 35.4167 150.42C35.1373 151.194 34.742 151.863 34.2301 152.427C33.719 152.992 33.1037 153.435 32.3849 153.758C31.6662 154.081 30.8661 154.242 29.9883 154.242C29.1089 154.242 28.314 154.081 27.6033 153.758C26.8919 153.435 26.281 152.992 25.7699 152.427C25.258 151.863 24.8627 151.194 24.5833 150.42ZM29.9641 157C31.29 156.984 32.5045 156.754 33.6075 156.311C34.7097 155.867 35.6602 155.25 36.4596 154.46C37.2582 153.67 37.8816 152.726 38.329 151.63C38.7763 150.532 39 149.315 39 147.976C39 146.606 38.7763 145.364 38.329 144.25C37.8816 143.137 37.2582 142.185 36.4596 141.395C35.6602 140.606 34.7097 140.005 33.6075 139.594C32.5045 139.182 31.29 138.984 29.9641 139.001C28.6535 139.001 27.4515 139.214 26.3566 139.641C25.2624 140.069 24.32 140.677 23.5294 141.468C22.7381 142.259 22.1184 143.214 21.671 144.335C21.2237 145.457 21 146.702 21 148.073C21 149.412 21.2237 150.629 21.671 151.726C22.1184 152.823 22.7381 153.762 23.5294 154.544C24.32 155.327 25.2624 155.932 26.3566 156.358C27.4515 156.786 28.6535 157 29.9641 157Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M65 156V139H60.5119L56 150.909L51.5351 139H47V156H49.8342V141.881H49.8812L54.9606 156H57.0394L62.1181 141.881H62.1658V156H65Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M77.0304 141.593H79.1946C79.5949 141.593 80.0129 141.617 80.4456 141.665C80.8783 141.713 81.2712 141.821 81.6237 141.989C81.9762 142.158 82.2647 142.397 82.4891 142.71C82.7136 143.022 82.8261 143.442 82.8261 143.97C82.8261 144.547 82.7018 144.995 82.4531 145.315C82.2043 145.635 81.8842 145.875 81.4913 146.035C81.0983 146.196 80.6693 146.292 80.2042 146.323C79.7399 146.356 79.2902 146.371 78.8583 146.371H77.0304V141.593ZM77.0304 148.965H79.1946C80.0924 148.965 80.9541 148.901 81.7797 148.773C82.6054 148.644 83.3317 148.4 83.9565 148.041C84.582 147.68 85.0787 147.172 85.4474 146.515C85.816 145.859 86 144.995 86 143.922C86 142.978 85.8278 142.19 85.4834 141.557C85.139 140.924 84.6784 140.421 84.1007 140.044C83.523 139.668 82.8541 139.4 82.0925 139.239C81.3308 139.08 80.5412 139 79.7237 139H74V156H77.0304V148.965Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M95.8389 149.516L98.4528 142.601L101.018 149.516H95.8389ZM99.8181 139H97.2517L90 156H93.3193L94.8266 152.11H102.055L103.609 156H107L99.8181 139Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M127.037 151.63H126.991L118.927 139H115V156H117.963V142.962H118.009L126.239 156H130V139H127.037V151.63Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M144.073 145.77L139.842 139H136L142.468 148.725V156H145.532V148.725L152 139H148.353L144.073 145.77Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M21 58L76 6.44199V0L21 51.558V58Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M21 68.558V75L76 23.442V17L21 68.558Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M21 85.5508V92L76 40.4411V34L21 85.5508Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M21 101.557V108L76 56.4419V50L21 101.557Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M76 67L21 118.557V125L76 73.442V67Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M131 51.5632L80 4V10.4368L131 58V51.5632Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M131 68.5631L80 21V27.4361L131 75V68.5631Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M131 85.5561L80 38V44.4358L131 92V85.5561Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M131 101.563L80 54V60.4367L131 108V101.563Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M131 118.562L80 71V77.4361L131 125V118.562Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M75.55 72.8829L75.61 72.8361V66.0936V66L75.55 66.0468L75.48 66V66.0936L75.39 66.1639V73L75.55 72.8829Z" fill="white" /> <path fillRule="evenodd" clipRule="evenodd" d="M75.48 50V50.0936L75.39 50.1639V57L75.55 56.8829L75.61 56.8361V50.0936V50L75.55 50.0468L75.48 50Z" fill="white" /> <path fillRule="evenodd" clipRule="evenodd" d="M75.61 33.0936V33L75.55 33.0468L75.48 33V33.0936L75.39 33.1639V40L75.55 39.8829L75.61 39.8361V33.0936Z" fill="white" /> <path fillRule="evenodd" clipRule="evenodd" d="M75.61 16.0936V16L75.55 16.0468L75.48 16V16.0936L75.39 16.1639V23L75.55 22.8829L75.61 22.8361V16.0936Z" fill="white" /> <path fillRule="evenodd" clipRule="evenodd" d="M75.55 6.88294L75.61 6.83612V0.0936455V0L75.55 0.0468227L75.48 0V0.0936455L75.39 0.16388V7L75.55 6.88294Z" fill="white" /> <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="152" height="170"> <path fillRule="evenodd" clipRule="evenodd" d="M0 170H152V0H0V170Z" fill="white" /> </mask> <g mask="url(#mask0)"> </g> </svg>,
            text: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
            id: 2,
            logo: <svg width="166" height="181" viewBox="0 0 166 181" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M50.0874 45.662H52.4252V48.0209V84.3371L63 73.6672V35H26.0078L26 111L36.5748 100.33V48.0209V45.662H38.9126H50.0874Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M93.7161 87.575H96.1226V89.9129V101.088V103.426H93.7161H45.8854L35 114L107 113.993V77H73.0868L62.2006 87.575H93.7161Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M129.265 42.8899V45.2649H126.89H103.735L93 56H140V9L129.265 19.7351V42.8899Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M84 0V53L95.049 42.1548V13.2446V10.8444H97.4945H126.95L138 0H84Z" fill="black" /> <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="166" height="181"> <path fillRule="evenodd" clipRule="evenodd" d="M0 180.203H165.82V0.220703H0V180.203Z" fill="white" /> </mask> <g mask="url(#mask0)"> <path fillRule="evenodd" clipRule="evenodd" d="M10.624 159.159C10.0466 160.264 9.12358 160.816 7.85413 160.816C6.58467 160.816 5.58626 160.421 4.85811 159.632C4.12915 158.843 3.76507 157.789 3.76507 156.47C3.76507 155.15 4.12915 154.096 4.85811 153.307C5.58626 152.519 6.58467 152.124 7.85413 152.124C9.12358 152.124 10.0466 152.676 10.624 153.781H15.0378C14.5182 152.203 13.6024 150.969 12.2904 150.08C10.9769 149.191 9.47724 148.746 7.78997 148.746C5.61192 148.746 3.76908 149.474 2.26145 150.931C0.753816 152.386 0 154.232 0 156.47C0 158.707 0.753816 160.554 2.26145 162.009C3.76908 163.465 5.61192 164.192 7.78997 164.192C9.47724 164.192 10.9769 163.748 12.2904 162.859C13.6024 161.969 14.5182 160.737 15.0378 159.159H10.624Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M35.884 159.634C35.155 160.422 34.1814 160.817 32.9625 160.817C31.7436 160.817 30.77 160.422 30.0419 159.634C29.3137 158.845 28.9496 157.79 28.9496 156.471C28.9496 155.152 29.3137 154.098 30.0419 153.308C30.77 152.52 31.7436 152.126 32.9625 152.126C34.1814 152.126 35.155 152.52 35.884 153.308C36.6121 154.098 36.9762 155.152 36.9762 156.471C36.9762 157.79 36.6121 158.845 35.884 159.634ZM40.7413 156.471C40.7413 154.234 39.9947 152.387 38.5023 150.932C37.0091 149.476 35.1694 148.748 32.985 148.748C30.7989 148.748 28.9529 149.476 27.446 150.932C25.9384 152.387 25.1846 154.234 25.1846 156.471C25.1846 158.709 25.9384 160.558 27.446 162.022C28.9529 163.484 30.7957 164.216 32.9737 164.216C35.1518 164.216 36.9906 163.484 38.491 162.022C39.9915 160.558 40.7413 158.709 40.7413 156.471Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M68.977 148.963H64.7364L60.3875 159.375L56.017 148.963H51.7764V164.064H55.4765V155.546L59.0026 164.064H61.75L65.2769 155.546V164.064H68.977V148.963Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M84.5771 151.759H86.8706C87.4183 151.759 87.8586 151.931 88.1906 152.275C88.5218 152.62 88.6878 153.061 88.6878 153.599C88.6878 154.136 88.5258 154.57 88.201 154.9C87.8762 155.231 87.4336 155.395 86.8706 155.395H84.5771V151.759ZM84.5771 158.191H86.8706C87.9235 158.191 88.8361 158.038 89.6076 157.729C90.379 157.421 90.9596 157.023 91.3494 156.535C92.0848 155.589 92.4528 154.607 92.4528 153.588C92.4528 152.311 91.9621 151.222 90.9813 150.318C90.0005 149.415 88.63 148.963 86.8706 148.963H80.877V164.065H84.5771V158.191Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M109.415 153.35L111.21 158.729H107.619L109.415 153.35ZM106.689 161.525H112.141L112.985 164.064H116.944L111.687 148.918H107.186L101.907 164.064H105.845L106.689 161.525Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M141.004 164.065V148.92H137.304V158.45L131.116 148.92H127.416V164.065H131.116V154.535L137.304 164.065H141.004Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M158.724 155.783L155.803 148.963H151.606L156.864 159.203V164.065H160.563V159.203L165.821 148.963H161.623L158.724 155.783Z" fill="black" /> </g> </svg>,
            text: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
            id: 3,
            logo: <svg width="144" height="170" viewBox="0 0 144 170" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M29.6787 82.8495L88.6886 23.7121V0.0625L29.6787 59.2066V82.8495Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M29.6787 134.25L88.6886 75.1056V55.9961L29.6787 115.134V134.25Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M55.2441 82.8498L114.262 23.7125V3.83984L55.2441 62.9847V82.8498Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M114.262 55.2402L55.2441 114.378V134.25L114.262 75.1053V55.2402Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M2.4293 167.314C3.18323 168.053 4.0804 168.626 5.12384 169.03C6.16652 169.434 7.31173 169.636 8.56024 169.636C9.74767 169.636 10.8657 169.407 11.9167 168.95C12.9669 168.492 13.8573 167.759 14.5879 166.753L12.2138 165.06C11.6807 165.746 11.1062 166.246 10.4895 166.558C9.87282 166.872 9.23726 167.027 8.58285 167.027C7.74524 167.027 6.9883 166.875 6.31052 166.57C5.63349 166.265 5.05146 165.846 4.56442 165.311C4.07663 164.778 3.70042 164.144 3.43429 163.412C3.1674 162.68 3.03395 161.879 3.03395 161.009C3.03395 160.201 3.1674 159.446 3.43429 158.744C3.70042 158.042 4.07663 157.429 4.56442 156.902C5.05146 156.376 5.63349 155.964 6.31052 155.666C6.9883 155.368 7.74524 155.22 8.58285 155.22C9.14604 155.22 9.70545 155.327 10.2611 155.541C10.8167 155.754 11.3912 156.181 11.9853 156.822L14.223 155.174C13.4155 154.244 12.5447 153.584 11.6084 153.195C10.672 152.806 9.65569 152.611 8.56024 152.611C7.31173 152.611 6.16652 152.814 5.12384 153.218C4.0804 153.622 3.18323 154.198 2.4293 154.945C1.67538 155.693 1.08581 156.597 0.659838 157.657C0.233115 158.718 0.0205078 159.896 0.0205078 161.192C0.0205078 162.459 0.233115 163.611 0.659838 164.648C1.08581 165.685 1.67538 166.574 2.4293 167.314Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M23.6423 158.743C23.9084 158.042 24.2854 157.428 24.7724 156.901C25.2602 156.374 25.8415 155.963 26.5193 155.666C27.1963 155.368 27.954 155.219 28.7916 155.219C29.6277 155.219 30.3899 155.368 31.0745 155.666C31.7598 155.963 32.3456 156.374 32.8327 156.901C33.3197 157.428 33.6967 158.042 33.9628 158.743C34.2289 159.445 34.3624 160.201 34.3624 161.009C34.3624 161.878 34.2289 162.679 33.9628 163.411C33.6967 164.143 33.3197 164.777 32.8327 165.31C32.3456 165.845 31.7598 166.264 31.0745 166.569C30.3899 166.874 29.6277 167.026 28.7916 167.026C27.954 167.026 27.1963 166.874 26.5193 166.569C25.8415 166.264 25.2602 165.845 24.7724 165.31C24.2854 164.777 23.9084 164.143 23.6423 163.411C23.3754 162.679 23.2427 161.878 23.2427 161.009C23.2427 160.201 23.3754 159.445 23.6423 158.743ZM22.6373 167.313C23.3912 168.053 24.2892 168.625 25.3318 169.029C26.3745 169.433 27.5205 169.635 28.7682 169.635C30.0318 169.62 31.1883 169.402 32.2393 168.983C33.2895 168.564 34.195 167.98 34.9565 167.232C35.7172 166.485 36.3113 165.593 36.7372 164.556C37.1632 163.518 37.3766 162.367 37.3766 161.1C37.3766 159.804 37.1632 158.629 36.7372 157.576C36.3113 156.523 35.7172 155.623 34.9565 154.876C34.195 154.129 33.2895 153.56 32.2393 153.171C31.1883 152.782 30.0318 152.595 28.7682 152.61C27.5205 152.61 26.3745 152.813 25.3318 153.217C24.2892 153.621 23.3912 154.197 22.6373 154.945C21.8841 155.692 21.2938 156.596 20.8678 157.657C20.4419 158.717 20.2285 159.895 20.2285 161.192C20.2285 162.458 20.4419 163.61 20.8678 164.647C21.2938 165.684 21.8841 166.573 22.6373 167.313Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M49.1351 153.023H44.751V169.224H47.4907V155.769H47.5367L52.4463 169.224H54.4555L59.3643 155.769H59.4103V169.224H62.1501V153.023H57.812L53.4505 164.373L49.1351 153.023Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M73.2705 155.495H75.3257C75.7057 155.495 76.1023 155.518 76.5132 155.564C76.9241 155.61 77.2965 155.712 77.632 155.873C77.9667 156.033 78.2404 156.262 78.4538 156.559C78.6671 156.856 78.7734 157.257 78.7734 157.761C78.7734 158.31 78.6558 158.737 78.4199 159.042C78.1839 159.347 77.8793 159.576 77.5061 159.728C77.1329 159.881 76.7258 159.972 76.2847 160.003C75.8429 160.033 75.417 160.049 75.0061 160.049H73.2705V155.495ZM73.2705 162.52H75.3257C76.1777 162.52 76.9964 162.46 77.7798 162.337C78.5639 162.216 79.2529 161.982 79.847 161.639C80.4404 161.296 80.9123 160.812 81.2629 160.186C81.612 159.561 81.7876 158.737 81.7876 157.715C81.7876 156.815 81.624 156.063 81.2968 155.461C80.9689 154.858 80.5316 154.377 79.9835 154.019C79.4354 153.661 78.7998 153.405 78.0768 153.252C77.3546 153.101 76.6044 153.023 75.8279 153.023H70.3936V169.225H73.2705V162.52Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M93.6154 156.455L96.1041 163.046H91.0807L93.6154 156.455ZM90.0991 165.517H97.1091L98.6162 169.224H101.904L94.9393 153.023H92.4514L85.418 169.224H88.6372L90.0991 165.517Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M108.273 153.023V169.224H111.15V156.799H111.196L119.188 169.224H122.842V153.023H119.965V165.059H119.919L112.087 153.023H108.273Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M134.966 169.224H137.842V162.29L143.917 153.023H140.492L136.473 159.476L132.5 153.023H128.892L134.966 162.29V169.224Z" fill="black" /> </svg>,
            text: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
            id: 4,
            logo: <svg width="166" height="181" viewBox="0 0 166 181" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M50.0874 45.662H52.4252V48.0209V84.3371L63 73.6672V35H26.0078L26 111L36.5748 100.33V48.0209V45.662H38.9126H50.0874Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M93.7161 87.575H96.1226V89.9129V101.088V103.426H93.7161H45.8854L35 114L107 113.993V77H73.0868L62.2006 87.575H93.7161Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M129.265 42.8899V45.2649H126.89H103.735L93 56H140V9L129.265 19.7351V42.8899Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M84 0V53L95.049 42.1548V13.2446V10.8444H97.4945H126.95L138 0H84Z" fill="black" /> <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="166" height="181"> <path fillRule="evenodd" clipRule="evenodd" d="M0 180.203H165.82V0.220703H0V180.203Z" fill="white" /> </mask> <g mask="url(#mask0)"> <path fillRule="evenodd" clipRule="evenodd" d="M10.624 159.159C10.0466 160.264 9.12358 160.816 7.85413 160.816C6.58467 160.816 5.58626 160.421 4.85811 159.632C4.12915 158.843 3.76507 157.789 3.76507 156.47C3.76507 155.15 4.12915 154.096 4.85811 153.307C5.58626 152.519 6.58467 152.124 7.85413 152.124C9.12358 152.124 10.0466 152.676 10.624 153.781H15.0378C14.5182 152.203 13.6024 150.969 12.2904 150.08C10.9769 149.191 9.47724 148.746 7.78997 148.746C5.61192 148.746 3.76908 149.474 2.26145 150.931C0.753816 152.386 0 154.232 0 156.47C0 158.707 0.753816 160.554 2.26145 162.009C3.76908 163.465 5.61192 164.192 7.78997 164.192C9.47724 164.192 10.9769 163.748 12.2904 162.859C13.6024 161.969 14.5182 160.737 15.0378 159.159H10.624Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M35.884 159.634C35.155 160.422 34.1814 160.817 32.9625 160.817C31.7436 160.817 30.77 160.422 30.0419 159.634C29.3137 158.845 28.9496 157.79 28.9496 156.471C28.9496 155.152 29.3137 154.098 30.0419 153.308C30.77 152.52 31.7436 152.126 32.9625 152.126C34.1814 152.126 35.155 152.52 35.884 153.308C36.6121 154.098 36.9762 155.152 36.9762 156.471C36.9762 157.79 36.6121 158.845 35.884 159.634ZM40.7413 156.471C40.7413 154.234 39.9947 152.387 38.5023 150.932C37.0091 149.476 35.1694 148.748 32.985 148.748C30.7989 148.748 28.9529 149.476 27.446 150.932C25.9384 152.387 25.1846 154.234 25.1846 156.471C25.1846 158.709 25.9384 160.558 27.446 162.022C28.9529 163.484 30.7957 164.216 32.9737 164.216C35.1518 164.216 36.9906 163.484 38.491 162.022C39.9915 160.558 40.7413 158.709 40.7413 156.471Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M68.977 148.963H64.7364L60.3875 159.375L56.017 148.963H51.7764V164.064H55.4765V155.546L59.0026 164.064H61.75L65.2769 155.546V164.064H68.977V148.963Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M84.5771 151.759H86.8706C87.4183 151.759 87.8586 151.931 88.1906 152.275C88.5218 152.62 88.6878 153.061 88.6878 153.599C88.6878 154.136 88.5258 154.57 88.201 154.9C87.8762 155.231 87.4336 155.395 86.8706 155.395H84.5771V151.759ZM84.5771 158.191H86.8706C87.9235 158.191 88.8361 158.038 89.6076 157.729C90.379 157.421 90.9596 157.023 91.3494 156.535C92.0848 155.589 92.4528 154.607 92.4528 153.588C92.4528 152.311 91.9621 151.222 90.9813 150.318C90.0005 149.415 88.63 148.963 86.8706 148.963H80.877V164.065H84.5771V158.191Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M109.415 153.35L111.21 158.729H107.619L109.415 153.35ZM106.689 161.525H112.141L112.985 164.064H116.944L111.687 148.918H107.186L101.907 164.064H105.845L106.689 161.525Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M141.004 164.065V148.92H137.304V158.45L131.116 148.92H127.416V164.065H131.116V154.535L137.304 164.065H141.004Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M158.724 155.783L155.803 148.963H151.606L156.864 159.203V164.065H160.563V159.203L165.821 148.963H161.623L158.724 155.783Z" fill="black" /> </g> </svg>,
            text: "Lorem ipsum dolor sit amet, consectetur2"
        },
        {
            id: 5,
            logo: <svg width="144" height="170" viewBox="0 0 144 170" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M29.6787 82.8495L88.6886 23.7121V0.0625L29.6787 59.2066V82.8495Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M29.6787 134.25L88.6886 75.1056V55.9961L29.6787 115.134V134.25Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M55.2441 82.8498L114.262 23.7125V3.83984L55.2441 62.9847V82.8498Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M114.262 55.2402L55.2441 114.378V134.25L114.262 75.1053V55.2402Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M2.4293 167.314C3.18323 168.053 4.0804 168.626 5.12384 169.03C6.16652 169.434 7.31173 169.636 8.56024 169.636C9.74767 169.636 10.8657 169.407 11.9167 168.95C12.9669 168.492 13.8573 167.759 14.5879 166.753L12.2138 165.06C11.6807 165.746 11.1062 166.246 10.4895 166.558C9.87282 166.872 9.23726 167.027 8.58285 167.027C7.74524 167.027 6.9883 166.875 6.31052 166.57C5.63349 166.265 5.05146 165.846 4.56442 165.311C4.07663 164.778 3.70042 164.144 3.43429 163.412C3.1674 162.68 3.03395 161.879 3.03395 161.009C3.03395 160.201 3.1674 159.446 3.43429 158.744C3.70042 158.042 4.07663 157.429 4.56442 156.902C5.05146 156.376 5.63349 155.964 6.31052 155.666C6.9883 155.368 7.74524 155.22 8.58285 155.22C9.14604 155.22 9.70545 155.327 10.2611 155.541C10.8167 155.754 11.3912 156.181 11.9853 156.822L14.223 155.174C13.4155 154.244 12.5447 153.584 11.6084 153.195C10.672 152.806 9.65569 152.611 8.56024 152.611C7.31173 152.611 6.16652 152.814 5.12384 153.218C4.0804 153.622 3.18323 154.198 2.4293 154.945C1.67538 155.693 1.08581 156.597 0.659838 157.657C0.233115 158.718 0.0205078 159.896 0.0205078 161.192C0.0205078 162.459 0.233115 163.611 0.659838 164.648C1.08581 165.685 1.67538 166.574 2.4293 167.314Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M23.6423 158.743C23.9084 158.042 24.2854 157.428 24.7724 156.901C25.2602 156.374 25.8415 155.963 26.5193 155.666C27.1963 155.368 27.954 155.219 28.7916 155.219C29.6277 155.219 30.3899 155.368 31.0745 155.666C31.7598 155.963 32.3456 156.374 32.8327 156.901C33.3197 157.428 33.6967 158.042 33.9628 158.743C34.2289 159.445 34.3624 160.201 34.3624 161.009C34.3624 161.878 34.2289 162.679 33.9628 163.411C33.6967 164.143 33.3197 164.777 32.8327 165.31C32.3456 165.845 31.7598 166.264 31.0745 166.569C30.3899 166.874 29.6277 167.026 28.7916 167.026C27.954 167.026 27.1963 166.874 26.5193 166.569C25.8415 166.264 25.2602 165.845 24.7724 165.31C24.2854 164.777 23.9084 164.143 23.6423 163.411C23.3754 162.679 23.2427 161.878 23.2427 161.009C23.2427 160.201 23.3754 159.445 23.6423 158.743ZM22.6373 167.313C23.3912 168.053 24.2892 168.625 25.3318 169.029C26.3745 169.433 27.5205 169.635 28.7682 169.635C30.0318 169.62 31.1883 169.402 32.2393 168.983C33.2895 168.564 34.195 167.98 34.9565 167.232C35.7172 166.485 36.3113 165.593 36.7372 164.556C37.1632 163.518 37.3766 162.367 37.3766 161.1C37.3766 159.804 37.1632 158.629 36.7372 157.576C36.3113 156.523 35.7172 155.623 34.9565 154.876C34.195 154.129 33.2895 153.56 32.2393 153.171C31.1883 152.782 30.0318 152.595 28.7682 152.61C27.5205 152.61 26.3745 152.813 25.3318 153.217C24.2892 153.621 23.3912 154.197 22.6373 154.945C21.8841 155.692 21.2938 156.596 20.8678 157.657C20.4419 158.717 20.2285 159.895 20.2285 161.192C20.2285 162.458 20.4419 163.61 20.8678 164.647C21.2938 165.684 21.8841 166.573 22.6373 167.313Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M49.1351 153.023H44.751V169.224H47.4907V155.769H47.5367L52.4463 169.224H54.4555L59.3643 155.769H59.4103V169.224H62.1501V153.023H57.812L53.4505 164.373L49.1351 153.023Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M73.2705 155.495H75.3257C75.7057 155.495 76.1023 155.518 76.5132 155.564C76.9241 155.61 77.2965 155.712 77.632 155.873C77.9667 156.033 78.2404 156.262 78.4538 156.559C78.6671 156.856 78.7734 157.257 78.7734 157.761C78.7734 158.31 78.6558 158.737 78.4199 159.042C78.1839 159.347 77.8793 159.576 77.5061 159.728C77.1329 159.881 76.7258 159.972 76.2847 160.003C75.8429 160.033 75.417 160.049 75.0061 160.049H73.2705V155.495ZM73.2705 162.52H75.3257C76.1777 162.52 76.9964 162.46 77.7798 162.337C78.5639 162.216 79.2529 161.982 79.847 161.639C80.4404 161.296 80.9123 160.812 81.2629 160.186C81.612 159.561 81.7876 158.737 81.7876 157.715C81.7876 156.815 81.624 156.063 81.2968 155.461C80.9689 154.858 80.5316 154.377 79.9835 154.019C79.4354 153.661 78.7998 153.405 78.0768 153.252C77.3546 153.101 76.6044 153.023 75.8279 153.023H70.3936V169.225H73.2705V162.52Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M93.6154 156.455L96.1041 163.046H91.0807L93.6154 156.455ZM90.0991 165.517H97.1091L98.6162 169.224H101.904L94.9393 153.023H92.4514L85.418 169.224H88.6372L90.0991 165.517Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M108.273 153.023V169.224H111.15V156.799H111.196L119.188 169.224H122.842V153.023H119.965V165.059H119.919L112.087 153.023H108.273Z" fill="black" /> <path fillRule="evenodd" clipRule="evenodd" d="M134.966 169.224H137.842V162.29L143.917 153.023H140.492L136.473 159.476L132.5 153.023H128.892L134.966 162.29V169.224Z" fill="black" /> </svg>,
            text: "Lorem ipsum dolor sit amet, consectetur2"
        }
    ]);

    // COMPANIES
    const [company, setCompany] = useState([
        {
            id: 1,
            logo: c_logo1,
            name: "Company name"
        },
        {
            id: 2,
            logo: c_logo2,
            name: "Company name"
        },
        {
            id: 3,
            logo: c_logo3,
            name: "Company name"
        },
        {
            id: 4,
            logo: c_logo2,
            name: "Company name"
        },
        {
            id: 5,
            logo: c_logo1,
            name: "Company name"
        },
        {
            id: 6,
            logo: c_logo1,
            name: "Company name"
        },
        {
            id: 7,
            logo: c_logo1,
            name: "Company name"
        }
    ]);

    // NEWS
    const [news, setNews] = useState([
        {
            id: 0,
            title: "News Title 1",
            photo: news1,
            date: null,
            text: "Fully integrated Software System assisting procedure designer in creating flight procedures compatible with international safety requirements, by monitoring designer's actions, generating optimal recommendations and supplying documented reports. PANS-OPS Master capable of proposing non-obvious optimal solutions to procedure designer even on the worst aeronautical conditions and preventing from going beyond the best innovative criteria in air navigation. Automated Software System for flight procedure design with unique analytical decision-making ability and computer intelligence. System for procedure designers at any proficiency level: Because of its clear-cut, user-friendly interface and an inbuilt analytical capability, PANDA can serve as a teaching tool for beginners up to the high-competence level. Automated Software System for flight procedure design with unique analytical decision-making ability and computer intelligence. System for procedure designers at any proficiency level: Because of its clear-cut, user-friendly interface and an inbuilt analytical capability, PANDA can serve as a teaching tool for beginners up to the high-competence level. Because of its clear-cut, user-friendly interface and an inbuilt analytical capability, PANDA can serve as a teaching tool for beginners up to the high-competence level. Fully integrated Software System assisting procedure designer in creating flight procedures compatible with international safety requirements, by monitoring designer's actions, generating optimal recommendations and supplying documented reports. PANS-OPS Master capable of proposing non-obvious optimal solutions to procedure designer even on the worst aeronautical conditions and preventing from going beyond the best innovative criteria in air navigation. Automated Software System for flight procedure design with unique analytical decision-making ability and computer intelligence. System for procedure designers at any proficiency level: Because of its clear-cut, user-friendly interface and an inbuilt analytical capability, PANDA can serve as a teaching tool for beginners up to the high-competence level. Automated Software System for flight procedure design with unique analytical decision-making ability and computer intelligence. System for procedure designers at any proficiency level: Because of its clear-cut, user-friendly interface and an inbuilt analytical capability, PANDA can serve as a teaching tool for beginners up to the high-competence level. Because of its clear-cut, user-friendly interface and an inbuilt analytical capability, PANDA can serve as a teaching tool for beginners up to the high-competence level."
        },
        {
            id: 1,
            title: "News Title 2",
            photo: news2,
            date: null,
        },
        {
            id: 2,
            title: "News Title 3",
            photo: news3,
            date: null,
        },
        {
            id: 3,
            title: "News Title 4",
            photo: news4,
            date: null,
        },
        {
            id: 4,
            title: "News Title 5",
            photo: news5,
            date: null,
        },
        {
            id: 5,
            title: "News Title 6",
            photo: news1,
            date: null,
        },
        {
            id: 6,
            title: "News Title 7",
            photo: news2,
            date: null,
        },
        {
            id: 7,
            title: "News Title 8",
            photo: news3,
            date: null,
        }
    ]);

    // PRODUCTS
    const [product, setProduct] = useState([
        {
            id: 0,
            name: "Flight Procedures Design System",
            img: product1
        },
        {
            id: 1,
            name: "Flight Procedures Design System",
            img: product1
        },
        {
            id: 2,
            name: "Flight Procedures Design System",
            img: product1
        },
        {
            id: 3,
            name: "Flight Procedures Design System",
            img: product1
        },
        {
            id: 4,
            name: "Flight Procedures Design System",
            img: product1
        },
        {
            id: 5,
            name: "Flight Procedures Design System",
            img: product1
        },
        {
            id: 6,
            name: "Flight Procedures Design System 2",
            img: product1
        },
        {
            id: 7,
            name: "Flight Procedures Design System 2",
            img: product1
        },
        {
            id: 8,
            name: "Flight Procedures Design System",
            img: product1
        }
    ]);

    // REVIEWS
    const [review, setReview] = useState([
        {
            id: 1,
            username: "Mr. Vadim Tumarkin",
        },
        {
            id: 2,
            username: "Mr. Vadim Tumarkin",
        },
        {
            id: 3,
            username: "Mr. Vadim Tumarkin",
        }
    ]);

    // FORUM DATA
    const [forumData, setforumData] = useState([
        {
            id: 1,
            rating: 21,
            status: "positive",
            replies: [
                {
                    id: 1
                },
                {
                    id: 2
                }
            ]
        },
        {
            id: 2,
            rating: 5,
            status: "negative",
            replies: [
                {
                    id: 1
                },
                {
                    id: 2
                }
            ]
        }
    ]);

    const provider_values = {
        widgetData: [widget, setWidget],
        productData: [product, setProduct],
        homePageData: [homePage, setHomePage],
        newsData: [news, setNews],
        companyData: [company, setCompany],
        clickedItem: [clickedItem, setClickedItem],
        firstSlide: [firstSlide, setfirstSlide],
        lastSlide: [lastSlide, setlastSlide],
        clickedSlide: [clickedSlide, setclickedSlide],
        clickedNews: [clickedNews, setclickedNews],
        reviewData: [review, setReview],
        forumData: [forumData, setforumData],
        firstProduct: [firstProduct, setfirstProduct],
        lastProduct: [lastProduct, setlastProduct],
        clickedProductSlide: [clickedProductSlide, setClickedProductSlide],
        firstWidget: [firstWidget, setfirstWidget],
        lastWidget: [lastWidget, setlastWidget],
        clickedWidgetSlide: [clickedWidgetSlide, setClickedWidgetSlide],
    };

    return (
        <DataContext.Provider value={provider_values}>
            {props.children}
        </DataContext.Provider>
    );
};