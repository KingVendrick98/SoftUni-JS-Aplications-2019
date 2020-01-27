import {
    getTemplate,
    checkContext
} from "../helpers/helper.js";
import {
    getData
} from "../helpers/storage.js";
import {
    create,
    getEvent
} from "../models/eventModel.js";

export function getCreate(context) {
    let newContext = checkContext(context)
    getTemplate("events/create.hbs", newContext);
}

export function postCreate(context) {
    let data = {
        ...context.params,
        peopleInterestedIn: 0,
        organizer: JSON.parse(getData("userInfo")).username
    }
    create(data)
        .then(() => {
            context.redirect("#/home");
        })
        .catch(console.log)
}

export async function getDetails(context) {
    let newContext = checkContext(context)
    let event = await getEvent(context.params.id);
    console.log(event);
    Object.keys(event).forEach((key) => {
        newContext[key] = event[key];
    })
    newContext.isOrganizer = newContext.username === event.organizer;
    getTemplate(`events/eventDetails.hbs`, newContext);
}

export async function getEdit(context) {
    let newContext = checkContext(context);
    let event = await getEvent(context.params.id);
    Object.keys(event).forEach((key) => {
        newContext[key] = event[key];
    })
    getTemplate("events/editEvent.hbs", context);
}