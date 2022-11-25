

export function generateCommitment(current, property, newValue, prevValue) {

    let newArr = current.map((e, key) => {
        if (e !== 'commitment') {
            let diff = newValue - prevValue
            if (diff === 0) {
                return e;
            }
            let roll = Math.round(Math.random() * 10) === 1;
            switch (property) {
                case ('remote'):
                    e += diff >= 0 ? 2 : -2
                    break;
                case ('devMeetings'):
                case ('tableTennis'):
                    e = roll ? e * 0.8: e;
                    break;
                case ('injections'):
                    e += roll ? diff * 3.14 : 0;
                    break;
                case ('codeReview'):
                    e = roll ? e * 0.1: e;
                    break
                case ('cycleSteps'):
                    e += (diff^e) * 0.666;
                    break;
                case ('overestimated'):
                    e -= 1;
                    break;
                case ('underestimated'):
                    e += 1;
                    break;
            }
            return Math.round(Math.abs(e))
        }
        return e
    })
    console.log(newArr)
    return newArr;
}

export function generateBurnup(current, property, newValue, prevValue, lastCom) {

    let newArr = current.map((e, key) => {
        if (e !== 'burnup') {
            let diff = newValue - prevValue
            let roll = Math.round(Math.random() * 10) === 1;
            if (current.length - 1 === key) {
                return e < lastCom ? lastCom : e;
            }
            switch (property) {
                case ('remote'):
                case ('devMeetings'):
                case ('tableTennis'):
                case ('injections'):
                case ('codeReview'):
                case ('cycleSteps'):
                case ('overestimated'):
                case ('underestimated'):
                    break;
            }
            return Math.round(e)
        }
        return e;
    })
    console.log(newArr)
    return newArr;
}
