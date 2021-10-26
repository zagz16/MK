import { logs } from "./logs.js";

export const arrLength = (type) => {

    let mathArrLength;
    switch (type) {
        case "hit":
            return mathArrLength = logs["hit"].length - 1;

        case "defence":
            return mathArrLength = logs["defence"].length - 1;
        case "start":
            return mathArrLength = logs["start"].length - 1;
        case "end":
            return mathArrLength = logs["end"].length - 1;
    }
}