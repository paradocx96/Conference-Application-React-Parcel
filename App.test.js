import React from "react";
import About from "./About";

test("Api Testing", async () =>{
    const response = new About();
    console.warn(await response.api());

    expect("Hello").toEqual("Hello");
})