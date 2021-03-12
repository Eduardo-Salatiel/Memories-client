import moment from 'moment';

export const memorieDate = (fecha) => {
    const date = moment(fecha);

    return date.format("MMM Do YY")
}