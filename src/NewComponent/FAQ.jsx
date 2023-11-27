import React from 'react'
import { Disclosure } from "@headlessui/react";
const FAQ =()=>{
    const data = [
        {
          id: 1,
          question: "Whats your Organization Goal?",
          answer: "Pharmacurticals pvt. ltd. - Your One-Step Online Pharmacy.Online pharmacies allow you to fill prescription medications from the comfort of your home using a pharmacy website or an app rather than having to fill them in person. An online pharmacy can also offer you more cost savings and convenience. We collected data on the products, costs, care, shipping times, insurance practices, and including some we tested ourselves, to create our list of top online pharmacies of 2023."
          
         
        },
        {
          id: 2,
          question: "Why do I get sick?",
          answer: "When you get sick, part or all of your body is not working as it should. The cause of sickness can come from inside your body or from the outside world. Diseases that start on the inside are usually inherited in the genes that you receive from your parents, which make up the master plan that determines how your body will grow and run. Abnormal development or functioning of different body systems is the cause of many chronic diseases.",
        },
        {
          id: 3,
          question: "What does the immune system do?",
          answer: "The immune system protects the human body against germs, which are microorganisms that cause sickness and disease. There are four major types of germs— harmful bacteria (pathogens), viruses, fungi, and protozoa. This defense system begins with the skin, which stops germs from getting into your blood or tissues. If germs get into your body, for example through your nose or mouth, white blood cells called phagocytes and lymphocytes attack them. Phagocytes scout out and destroy invaders, and long-living lymphocytes remember the invaders and release chemicals called antibodies to make the body resistant, or immune, to them. White blood cells live in the bloodstream, lymphatic system, and spleen.",
        },
        {
          id: 4,
          question: "What are allergies?",
          answer:
            "An allergic reaction is a reaction to a substance that is typically harmless to most other people. Allergies happen when a person’s immune system overreacts to a substance that the person has breathed in, touched, or eaten. Allergens—the antigens that bring on an allergic reaction—may be foods, medications, plants or animals, chemicals, dust, or molds. Some common allergic reactions are hay fever, allergic conjunctivitis (an eye reaction), asthma, pet-dander allergies, and skin reactions, such as hives. A common cause for allergies are dust mites, a large part of household dust. If they are breathed in by an allergic person, the body parts of the dead mites can trigger asthma, a lung condition that causes a person to have difficulty breathing. Cat and dog dander, or skin flakes, can cause an allergic reaction, such as sneezing, wheezing, and runny eyes and nose. Common food allergy triggers are the proteins in cow’s milk, eggs, peanuts, wheat, soy, fish, shellfish, and tree nuts.",
        },
      ];
  
  

  return (
    <>

      <div className="py-5 bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center justify-center w-full p-8 mx-auto mt-4 text-center xl:px-0">
          <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
            FAQ
          </div>
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            Answers
          </p>
        </div>

        <div className="container p-0 mx-auto xl:px-0">
          <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
            <div>
              {data.map((item, index) => (
                <div className="mb-5" key={item.id}>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-gray-800 dark:text-gray-200"
                          type="button">
                          <span>{item.question}</span>
                          <svg
                            className={`w-5 h-5 text-indigo-500 ${
                              !open ? "transform rotate-180" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              fill-rule="evenodd"
                              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                              clipRule="evenodd"></path>
                          </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                          {item.answer}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
        </>
    )
}

export default FAQ