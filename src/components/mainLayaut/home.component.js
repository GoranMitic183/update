import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Cards from "./cards.component";
import classes from "./home.module.css";
import Iframe from "react-iframe";
import TrainingTable from "./trainingTable.component";
import { fetchTrainings } from "../../query/fetchTrainingPlans";
import { toast } from "react-toastify";
import ContactForm from "./contact.component";
import Stopwatch from "./stopwatch.component";
import CalendarComponent from "./calendar.component";
import { Blog } from "./blog.component";
import NewBlog from "./newBlog.component";

const Home = () => {
  const [isContent, setIsContent] = useState("");

  const { isLoading, error, data } = useQuery({
    queryKey: ["trainingPlans"],
    queryFn: () => fetchTrainings(),
  });

  const handleTrainingPlan = () => {
    setIsContent("table");
  };

  const handleContent = (e) => {
    const contentType = e.target.innerText.toLowerCase();
    setIsContent(contentType);
  };

  return (
    <>
      <div className={classes.backPic}>
        <div className={classes.btnContainer}>
          <button
            className={`btn btn-primary ${classes.startBtn}`}
            onClick={handleContent}
          >
            Blog
          </button>
          <button
            className={`btn btn-primary ${classes.startBtn}`}
            onClick={handleContent}
          >
            AddNewBlog
          </button>
          
          <button
            className={`btn btn-primary ${classes.startBtn}`}
            onClick={handleContent}
          >
            Calendar
          </button>
          <button
            className={`btn btn-primary ${classes.startBtn}`}
            onClick={handleContent}
          >
            Stopwatch
          </button>
          <button
            className={`btn btn-primary ${classes.startBtn}`}
            onClick={handleContent}
          >
            Contact
          </button>
        </div>
        <div className={classes.contentContainer}>
          {isContent === "blog" && <Blog />}
          {isContent === "table" && <TrainingTable data={data}/>}
          {isContent === "contact" && <ContactForm />}
          {isContent === "calendar" && <CalendarComponent />}
          {isContent === "stopwatch" && <Stopwatch />}
          {isContent === "addnewblog" && <NewBlog />}

        </div>

        <Iframe
          url="https://www.youtube.com/embed/6grpJFNkiDs"
          width="550px"
          height="300px"
          id=""
          className={classes.video}
          display="block"

        />
      </div>

      <div className={`container ${classes.section}`}>
        <h1 className={classes.programTitle}>30 Day Program</h1>
        <div className={classes.cards}>
          {error && toast.error(error)}
          {isLoading && <p>Loading...</p>}
          {data &&
            data.map((plan) => {
              return (
                <Cards
                  key={plan._id}
                  onTrainingHandler={handleTrainingPlan}
                  // onBuyHandler={handleBuy}
                  image={plan.image}
                  title={plan.title}
                  description={plan.description}
                  price={plan.price}
                  program={plan.program} 

                  data={data}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
