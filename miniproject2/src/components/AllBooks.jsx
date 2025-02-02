import { useState } from "react";
import './books.css'

const books = [
    { 
        id: 1, 
        title: 'Martyr!', 
        author: 'Kaveh Akbar',
        synopsis: 'A paean to how we spend our lives seeking meaning—in faith, art, ourselves, others—in which a newly sober, orphaned son of Iranian immigrants, guided by the voices of artists, poets, and kings, embarks on a search that leads him to a terminally ill painter living out her final days in the Brooklyn Museum.',
        image: './images/f_akb_martyr.jpg',
        genre: 'Fiction', 
        weeks: 1
    },
    { 
        id: 2, 
        title: 'James', 
        author: 'Percival Everett',
        synopsis: "A brilliant reimagining of Adventures of Huckleberry Finn—both harrowing and ferociously funny—told from the enslaved Jim's point of view.",
        image: './images/f_eve_james.jpg',
        genre: 'Fiction',
        weeks: 2
    },
    { 
        id: 3,
        title: 'The Life Impossible',
        author: 'Matt Haig',
        synopsis: 'What looks like magic is simply a part of life we do not understand yet…',
        image: './images/f_hai_lifeimpossible.jpg',
        genre: 'Fiction',
        weeks: 3
    },
    { 
        id: 4, 
        title: 'The God of the Woods', 
        author: 'Liz Moore', 
        synopsis: 'When a teenager vanishes from her Adirondack summer camp, two worlds collide.',
        image: './images/f_moo_godofwoods.jpg',
        genre: 'Fiction', 
        "weeks": 5 
    },
    { 
        id: 5,
        title: 'After Annie',
        author: 'Anna Quindlen',
        synopsis: 'When Annie Brown dies suddenly, her husband, her four young children and her closest friend are left to struggle without the woman who centered their lives.',
        image: './images/f_qui_annie.jpg',
        genre: 'Fiction',
        weeks: 2
    },

    { 
        id: 6, 
        title: 'Intermezzo', 
        author: 'Sally Rooney',
        synopsis: 'An exquisitely moving story about grief, love, and family—but especially love.',
        image: './images/f_roo_intermezzo.jpg',
        genre: 'Fiction',
        weeks: 4
    },
    { 
        id: 7, 
        title: 'The Housemaid', 
        author: 'Freida McFadden', 
        synopsis: 'An addictive psychological thriller with a jaw-dropping twist.',
        image: './images/m_fmc_housemaid.jpg',
        genre: 'Mystery', 
        weeks: 15
    },
    { 
        id: 8, 
        title: 'The Hunter', 
        author: 'Tana French', 
        synopsis: 'It is a blazing summer when two men arrive in a small village in the West of Ireland. One of them is coming home. Both of them are coming to get rich. One of them is coming to die.',
        image: './images/m_fre_hunter.jpg',
        genre: 'Mystery',
        weeks: 8
    },
    { 
        id: 9, 
        title: 'The Blue Hour', 
        author: 'Paula Hawkins', 
        synopsis: 'Welcome to Eris: An island with only one house, one inhabitant, one way out. Unreachable from the Scottish mainland for twelve hours each day.',
        image: './images/m_haw_bluehour.jpg',
        genre: 'Mystery',
        weeks: 6
    },
    { 
        id: 10, 
        title: 'We Solve Murders', 
        author: 'Richard Osman', 
        synopsis: 'A brand new series. An iconic new detective duo. And a puzzling new murder to solve...',
        image: './images/m_osm_murders.jpg',
        genre: 'Mystery',
        weeks: 9
    },
    { 
        id: 11, 
        title: 'The Grey Wolf', 
        author: 'Louis Penny', 
        synopsis: 'The nineteenth mystery in the #1 New York Times bestselling Armand Gamache series.',
        image: './images/m_pen_wolf.jpg',
        genre: 'Mystery',
        weeks: 10
    },
    { 
        id: 12, 
        title: 'The Last One at the Wedding', 
        author: 'Jason Rekulak', 
        synopsis: 'A breathtaking work of suspense about a father trying to save his daughter from a life-altering decision that will put everything he loves on the line.',
        image: './images/_m_rek_wedding.jpg',
        genre: 'Mystery',
        weeks: 4
    },
    { 
        id: 13, 
        title: "Merlin's Tour of the Universe: A Traveler's Guide to Blue Moons and Black Holes, Mars, Stars, and Everything Far", 
        author: 'Neil DeGrasse Tyson', 
        synopsis: 'A delightful journey through the cosmos, his fictional character Merlin responds to popular questions asked by adults and children alike.',
        image: './images/n_deg_merlin.jpg',
        genre: 'Nonfiction', 
        weeks: 6
    },
    { 
        id: 14, 
        title: 'John Lewis: A Life',
        author: 'David Greenberg', 
        synopsis: 'A comprehensive, authoritative biography of Civil Rights icon John Lewis.',
        image: './images/n_gre_lewis.jpg',
        genre: 'Nonfiction',
        weeks: 15
    },
    { 
        id: 15, 
        title: 'Nexus: A Brief History of Information Networks from the Stone Age to AI', 
        author: 'Yuval Noah Harari',
        synopsis: 'The groundbreaking story of how information networks have made, and unmade, our world.',
        image: './images/n_har_nexus.jpg',
        genre: 'Nonfiction', 
        weeks: 8
    },
    { 
        id: 16, 
        title: "Don't Believe Everything You Think", 
        author: 'Joseph Nguyen',
        synopsis: 'Learn how to overcome anxiety, self-doubt & self-sabotage without needing to rely on motivation or willpower.',
        image: './images/n_ngu_think.jpg',
        genre: 'Nonfiction',
        weeks: 5
    },
    { 
        id: 17, 
        title: 'The Elements of Marie Curie: How the Glow of Radium Lit a Path for Women in Science', 
        author: 'Dava Sobel',
        synopsis: 'A luminous chronicle of the life and work of the most famous woman in the history of science, and the untold story of the many young women trained in her laboratory who were launched into stellar careers of their own.',
        image: './images/n_sob_curie.jpg',
        genre: 'Nonfiction',
        weeks: 8
    },
    { 
        id: 18, 
        title: 'The Backyard Bird Chronicles', 
        author: 'Amy Tan', 
        synopsis: 'A gorgeous, witty account of birding, nature, and the beauty around us that hides in plain sight.',
        image: './images/n_tan_backyardbird.jpg',
        genre: 'Nonfiction',
        weeks: 8
    },
    { 
        id: 19, 
        title: 'The Most Wonderful Crime of the Year', 
        author: 'Ally Carter',
        synopsis: 'Knives Out gets a rom-com twist in this rivals-to-lovers Christmas romance-mystery.',
        image: './images/r_car_crimeofyear.jpg',
        genre: 'Romance', 
        weeks: 4
    },
    { 
        id: 20, 
        title: 'This Summer Will Be Different', 
        author: 'Carley Fortune',
        synopsis: "This summer they will keep their promise. This summer they won’t give into temptation. This summer will be different." ,
        image: './images/r_for_summer.jpg',
        genre: 'Romance',
        weeks: 4
},
    { 
        id: 21, 
        title: 'Not In Love', 
        author: 'Ali Hazelwood',
        synopsis: 'A forbidden, secret affair proves that all is fair in love and science.',
        genre: 'Romance',
        weeks: 6
    },
    { 
        id: 22, 
        title: 'Funny Story', 
        author: 'Emily Henry', 
        synopsis: 'A shimmering, joyful new novel about a pair of opposites with the wrong thing in common.',
        image: './images/r_hen_funnystory.jpg',
        genre: 'Romance',
        weeks: 15
    },
    { 
        id: 23, 
        title: 'The Paradise Problem', 
        author: 'Christina Lauren',
        synopsis: 'A delicious new romance between the buttoned-up heir of a grocery chain and his free-spirited artist ex as they fake their relationship in order to receive a massive inheritance.',
        image: './images/r_lau_paradise.jpg',
        genre: 'Romance',
        weeks: 10
    },
    { 
        id: 24, 
        title: 'A Jingle Bell Mingle', 
        author: 'Julie Murphy & Sierra Simone',
        synopsis: 'What happens when there is no room at the inn and you and your potentially demonic cat become roommates with your grumpy one-night stand?',
        image: './images/r_mur_mingle.jpg',
        genre: 'Romance',
        weeks: 5
    }
];

function SingleBook ({title, author, image}) {
    return (
        <li >
            <img src={image} width="500" alt={title}/>
            <h2>{title}</h2>
            <p>{author}</p>
        </li>
    )
}

function AllBooks () {

    const [currentBooks, setCurrentBooks] = useState(books)

    const bookList = currentBooks.map(book => (
        <SingleBook
            key={book.id}
            image={book.image}
        />
    ))

    return (
        <>
            <div>
                <h2 className="head2"><i className="fa-solid fa-book-open-reader"></i> Find your next great read!</h2>
                <br/>
                <br/>
                <br/>
                <h3 className="head3a"> <i className="fa-solid fa-glasses"></i> Literary Fiction</h3>
                <br/>
                <br/>
                <div className="row no-gutter">
                <div className="image-row">
                        <img src="./images/f_akb_martyr.jpg" className="card-img-top" alt="Martyr! cover"/>
                        <img src="./images/f_eve_james.jpg" className="card-img-top" alt="James cover"/>
                        <img src="./images/f_hai_lifeimpossible.jpg" className="card-img-top" alt="Life Impossible cover"/>
                        <img src="./images/f_moo_godofwoods.jpg" className="card-img-top" alt="The Gods of the Woods cover"/>
                        <img src="./images/f_qui_annie.jpg" className="card-img-top" alt="After Annie cover"/>
                        <img src="./images/f_roo_intermezzo.jpg" className="card-img-top" alt="Intermezzo cover"/>
                </div>
                </div>
                <br/>
                <br/>
                <br/>
                <h3 className="head3b"> <i className="fa-solid fa-user-secret"></i> Mystery & Thrillers</h3>
                <br/>
                <br/>
                <div className="row no-gutter">
                <div className="image-row">
                        <img src="./images/m_fmc_housemaid.jpg" className="card-img-top" alt="The Housemaid cover"/>
                        <img src="./images/m_fre_hunter.jpg" className="card-img-top" alt="The Hunter cover"/>
                        <img src="./images/m_haw_bluehour.jpg" className="card-img-top" alt="The Blue Hour cover"/>
                        <img src="./images/m_osm_murders.jpg" className="card-img-top" alt="We Solve Murders cover"/>
                        <img src="./images/m_pen_wolf.jpg" className="card-img-top" alt="The Grey Wolf cover"/>
                        <img src="./images/m_rek_wedding.jpg" className="card-img-top" alt="The Last One at the Wedding cover"/>
                </div>
                </div>
                <br/>
                <br/>
                <br/>
                <h3 className="head3c"> <i className="fa-solid fa-brain"></i> Nonfiction</h3>
                <br/>
                <br/>
                <div className="row no-gutter">
                <div className="image-row">
                        <img src="./images/n_deg_merlin.jpg" className="card-img-top" alt="Merlin's Tour cover"/>
                        <img src="./images/n_gre_lewis.jpg" className="card-img-top" alt="John Lewis cover"/>
                        <img src="./images/n_har_nexus.jpg" className="card-img-top" alt="Nexus cover"/>
                        <img src="./images/n_ngu_think.jpg" className="card-img-top" alt="Don't Believe Everything You Think cover"/>
                        <img src="./images/n_sob_curie.jpg" className="card-img-top" alt="Marie Curie cover"/>
                        <img src="./images/n_tan_backyardbird.jpg" className="card-img-top" alt="The Backyard Bird Chronicles cover"/>
                </div>
                </div>
                <br/>
                <br/>
                <br/>
                <h3 className="head3d"> <i className="fa-solid fa-heart"></i> Romance</h3>
                <br/>
                <br/>
                <div className="row no-gutter">
                <div className="image-row">
                        <img src="./images/r_car_crimeofyear.jpg" className="card-img-top" alt="The Most Wonderful Crime of the Year cover"/>
                        <img src="./images/r_for_summer.jpg" className="card-img-top" alt="This Summer Will Be Different cover"/>
                        <img src="./images/r_haz_notinlove.jpg" className="card-img-top" alt="Not in Love cover"/>
                        <img src="./images/r_hen_funnystory.jpg" className="card-img-top" alt="Funny Story cover"/>
                        <img src="./images/r_lau_paradise.jpg" className="card-img-top" alt="The Paradise Problem cover"/>
                        <img src="./images/r_mur_mingle.jpg" className="card-img-top" alt="A Jingle Bell Mingle cover"/>
                </div>
                </div>
                <br/>
                <br/>
                <br/>
                
            </div>
                
        </>
    )
}

export default AllBooks