import React, {useEffect} from 'react';
import Slider from '@mui/material/Slider';

const SprintFilter = ({property, icon, label, scale, onChange}) => {
    let max = 10 * scale
    let step = (max <= 20 ? 1 : 5)
    let defaultValue = Math.round(max / 2)

    return (
        <div className="sprintFilter">
            <span>{icon}</span>
            <label>{label}</label>
            <Slider
                aria-label={property}
                defaultValue={defaultValue}
                valueLabelDisplay="auto"
                step={step}
                min={0}
                max={max}
                onChangeCommitted={onChange}
            />
        </div>
    )
};

export default SprintFilter;
