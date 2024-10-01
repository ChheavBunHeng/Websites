import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";

export default function Careers() {
    return (
        <div>
            <Accordion className="">
                <AccordionSummary>
                    <div className="!flex !justify-between !w-full"> {/* Wrapping div for styles */}
                        <Typography>Hello world</Typography>
                        <Typography>Hello world</Typography>

                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Hello world</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
