#!/usr/bin/env node

import chalk from "chalk";
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import axios from 'axios';

// Sleep function. Use 'await sleep(ms)'
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

// Welcome function
async function welcome() {
    const figletMsg = `isBlocked`
    figlet(figletMsg, (err, data) => {
        console.log(gradient.fruit.multiline(data));
    });

    await sleep(1000)
}

//Get blocked hosts
async function getBlockedHosts() {
    const response = await axios.get('https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/fakenews-gambling-social/hosts');
    return response;
}

// Clean data
async function cleanData() {
    const data = await getBlockedHosts()
    const newData = data.data

    console.log(newData)
}

await welcome()
await cleanData()

process.exit(0);