import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const FoodDetail = ({ cf }) => {
    console.log(cf);
    return (
        <div className="flex">
            <Accordion allowMultipleExpanded={false}>
                <AccordionItem>
                    <AccordionItemHeading className="flex">
                        <AccordionItemButton>What</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat
                            ut occaecat consequat est minim minim esse tempor laborum consequat esse
                            adipisicing eu reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default FoodDetail;
