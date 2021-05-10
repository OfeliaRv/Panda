import news1 from '../../assets/img/news1.png'
import news2 from '../../assets/img/news2.png'
import news3 from '../../assets/img/news3.png'
import news4 from '../../assets/img/news4.png'
import news5 from '../../assets/img/news5.png'

export const newsState = {
    news: [
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
    ]
}

const newsReducer = (state = newsState) => {
    return state;
}

export default newsReducer;