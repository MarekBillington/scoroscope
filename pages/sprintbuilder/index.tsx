import Link from "next/link";
import React, {useEffect, useState} from "react";
import {generateCommitment, generateBurnup} from "../../components/calculator"
// @ts-ignore
import c3 from "c3";
import SprintFilter from "../../components/sprintfilter"

const SprintBuilder = () => {

    const [commitment, setCommitment] = useState(['commitment', 10, 10, 10]);
    const [burnup, setBurnup] = useState(['burnup', 0, 5, 8]);

    useEffect(() => {
        // 2 week sprint by default - mon to fri
        c3.generate({
            bindto: "#chart",
            data: {
                columns: [
                    commitment,
                    burnup,
                ],
                types: {
                    commitment: 'step',
                    burnup: 'step',
                },
            },
        });
    }, []);

    function recalculate(event, newValue) {
        const property = event.target.children[0].getAttribute("aria-label");
        if (property === null) {
            return;
        }
        generateCommitment(property, newValue)
        generateBurnup(property, newValue)
    }

    return (
        <div className="mainBody">
            <Link href={`/`}>Home</Link>
            <hr width="70%"/>
            <div id="chart"/>
            <br/>
            <div className="sprintBody">
                <div className="sprintLeft">
                    <SprintFilter
                        property="remote"
                        icon="&#127968;"
                        label="Engineers working remote to manager"
                        scale={1}
                        onChange={recalculate}
                    />
                    <SprintFilter
                        property="devMeetings"
                        icon="&#128203;"
                        label="Hours per day devs spent in meetings"
                        scale={0.8}
                        onChange={recalculate}
                    />
                    <SprintFilter
                        property="tableTennis"
                        icon="&#127955;"
                        label="Hours playing table tennis"
                        scale={2}
                        onChange={recalculate}
                    />
                    <SprintFilter
                        property="injections"
                        icon="&#128372;"
                        label="Pushiness of PM"
                        scale={10}
                        onChange={recalculate}
                    />
                </div>
                <div className="sprintRight">
                    <SprintFilter
                        property="codeReview"
                        icon="&#128108;"
                        label="How many people need to review code"
                        scale={1}
                        onChange={recalculate}
                    />
                    <SprintFilter
                        property="cycleSteps"
                        icon="🧗"
                        label="How many steps for devs to release code"
                        scale={10}
                        onChange={recalculate}
                    />
                    <SprintFilter
                        property="overestimated"
                        icon="&#128200;"
                        label="Over-estimated tickets"
                        scale={1}
                        onChange={recalculate}
                    />
                    <SprintFilter
                        property="underestimated"
                        icon="&#128201;"
                        label="Underestimated tickets"
                        scale={1}
                        onChange={recalculate}
                    />
                </div>
            </div>
        </div>
    )
}

export default SprintBuilder
