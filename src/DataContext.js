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

    const [clickedItem, setClickedItem] = useState(null);

    // LEFT PAGE NAME
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
            logo: c_logo1,
            text: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
            id: 2,
            logo: c_logo2,
            text: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
            id: 3,
            logo: c_logo3,
            text: "Lorem ipsum dolor sit amet, consectetur"
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
            logo: c_logo1,
            name: "Company name"
        },
        {
            id: 5,
            logo: c_logo2,
            name: "Company name"
        }
    ]);

    // NEWS
    const [news, setNews] = useState([
        {
            id: 1,
            title: null,
            photo: news1,
            date: null,
            text: "Fully integrated Software System assisting procedure designer in creating flight procedures compatible with international safety requirements, by monitoring designer's actions, generating optimal recommendations and supplying documented reports. PANS-OPS Master capable of proposing non-obvious optimal solutions to procedure designer even on the worst aeronautical conditions and preventing from going beyond the best innovative criteria in air navigation. Automated Software System for flight procedure design with unique analytical decision-making ability and computer intelligence. System for procedure designers at any proficiency level: Because of its clear-cut, user-friendly interface and an inbuilt analytical capability, PANDA can serve as a teaching tool for beginners up to the high-competence level. Automated Software System for flight procedure design with unique analytical decision-making ability and computer intelligence. System for procedure designers at any proficiency level: Because of its clear-cut, user-friendly interface and an inbuilt analytical capability, PANDA can serve as a teaching tool for beginners up to the high-competence level. Because of its clear-cut, user-friendly interface and an inbuilt analytical capability, PANDA can serve as a teaching tool for beginners up to the high-competence level."
        },
        {
            id: 2,
            title: null,
            photo: news2,
            date: null,
        },
        {
            id: 3,
            title: null,
            photo: news3,
            date: null,
        },
        {
            id: 4,
            title: null,
            photo: news4,
            date: null,
        },
        {
            id: 5,
            title: null,
            photo: news5,
            date: null,
        },
        {
            id: 6,
            title: null,
            photo: news1,
            date: null,
        },
        {
            id: 7,
            title: null,
            photo: news2,
            date: null,
        },
        {
            id: 8,
            title: null,
            photo: news3,
            date: null,
        }
    ]);

    // PRODUCTS
    const [product, setProduct] = useState([
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
            name: "Flight Procedures Design System",
            img: product1
        },
    ])

    const provider_values = {
        widgetData: [widget, setWidget],
        productData: [product, setProduct],
        homePageData: [homePage, setHomePage],
        newsData: [news, setNews],
        companyData: [company, setCompany],
        clickedItem: [clickedItem, setClickedItem]
    };

    return (
        <DataContext.Provider value={provider_values}>
            {props.children}
        </DataContext.Provider>
    );
};