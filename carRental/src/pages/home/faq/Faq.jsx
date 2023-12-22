import React, {useState} from "react";
import {IoIosArrowDown} from "react-icons/io";
import faqCar from "../../../assets/images/faqCar.png";
import HeadingTitle from "../../../components/HeadingTitle/HeadingTitle";
import PageContainer from "../../../components/PageContainer/PageContainer";
import "./faq.css";

const questions = [
  {
    id: "1",
    title: "What is special about comparing rental car deals?",
    answer:
      "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
  },
  {
    id: "2",
    title: " How do I find the car rental deals?",
    answer:
      "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
  },
  {
    id: "3",
    title: "How do I find such low rental car prices?",
    answer:
      "Book in advance : Booking  your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
  },
];

const Faq = () => {
  const [questionId, setQuestionId] = useState("");

  return (
    <div className="faq">
      <PageContainer>
        <HeadingTitle
          title={"FAQ"}
          text={"Frequently Asked Questions"}
          subText={
            "Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries."
          }
        />

        <div className="faq__content">
          {questions.map((item, index) => {
            return (
              <div
                className={`${
                  questionId == item.id
                    ? "faq__question faq__question__active"
                    : "faq__question"
                }`}
              >
                <div
                  onClick={() => {
                    if (questionId == item.id) {
                      setQuestionId("");
                    } else {
                      setQuestionId(item.id);
                    }
                  }}
                  className="faq__question__text"
                >
                  <h2>
                    {index + 1}. {item.title}
                  </h2>
                  <IoIosArrowDown />
                </div>
                <p>{item.answer}</p>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </div>
  );
};

export default Faq;
