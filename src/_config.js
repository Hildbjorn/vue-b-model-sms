import { version } from "../package.json";

export const process = {
    dev: true,
};

export const site = {
    home: process.dev ? "http://localhost:8080/" : "https://mysite.ru",

};

export const app = {
    title: "B-model SMS",
    description: "Приложение для обмена короткими сообщениями",
    version: version,
};

export const links = [
    {
        title: "Главная",
        alias: "home",
        url: "/",
    },
    {
        title: "О приложении",
        alias: "about",
        url: "/about",
    },
];