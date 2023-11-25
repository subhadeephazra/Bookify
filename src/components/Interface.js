import React, { useEffect, useState } from "react";

import logo from "../images/Group.png";
import favlogo from "../images/bx_bx-book-heart.png";
import premium from "../images/fluent_premium-person-20-regular.png";
import notification from "../images/ic_round-notifications-none.png";
import profile from "../images/IMG20210528181544.png";

const Interface = () => {
  const [harryPotterData, setHarryPotterData] = useState([]);
  const [sherlockHolmesData, setSherlockHolmesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
        );
        const data1 = await response1.json();
        setHarryPotterData(data1);
        // console.log(harryPotterData);

        const response2 = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes"
        );
        const data2 = await response2.json();
        setSherlockHolmesData(data2);
        // console.log(sherlockHolmesData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="bookify_Logo" />
          <h3>Bookify</h3>
        </div>
        <div >
          <input
            type="text" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."/>
          <button>Search</button>
        </div>
        <div className="icons">
          <img src={favlogo} alt="favourite" />
          <img src={notification} alt="notification" />
          <img src={premium} alt="premium" />
          <img src={profile} alt="profile" />
        </div>
      </nav>

      <section className="section1">
         {harryPotterData.items && harryPotterData.items.length > 0 && (
           harryPotterData.items.slice(7, 10).map((item) => (
             <>
             <div className="section1_img" key={item.id}>
               <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="bookthumbnail" />
             </div>
                            <div className="section1_desc">
                            <h3>Title: {item.volumeInfo.title}</h3>
                            <p>Description: {item.volumeInfo.description
                           ? item.volumeInfo.description
                               .split(' ')
                               .slice(0, 20)
                               .join(' ')
                           : 'No description available.'}</p>
                           <button>Now Read!</button>
                            </div>
             </>
           ))
         )}
    </section>


      <h1>More Books</h1>

      <section className="section2">
                 {sherlockHolmesData.items && sherlockHolmesData.items.length > 0 && (
                  sherlockHolmesData.items.slice(0, 5).map((item) => (
                 <div key={item.id}>
                    <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="bookthumbnail" />
                </div>
                ))
              )}
      </section>

      <section className="section3">
                 {harryPotterData.items && harryPotterData.items.length > 0 && (
                  harryPotterData.items.slice(5,10).map((item) => (
                 <div key={item.id}>
                    <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="bookthumbnail" />
                </div>
                ))
              )}
      </section>
    </div>
    </>
  );
};

export default Interface;
